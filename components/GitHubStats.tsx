import Reveal, { SectionLabel } from "./Reveal";
import { SiGithub } from "react-icons/si";

/**
 * GitHub stats + contribution graph for @mubasherdevv.
 * Live data from the public GitHub API (no token needed), revalidated daily.
 * Falls back to the numbers verified 2026-11-18 if the API is unreachable.
 * Followers are deliberately NOT shown (only 2 — adds nothing for a client).
 */
type Stats = {
  repos: number;
  stars: number;
  commits: number;
  contributions: number;
  langs: { name: string; count: number; color: string }[];
  since: string;
};

const FALLBACK: Stats = {
  repos: 41,
  stars: 4,
  commits: 887,
  contributions: 1491,
  langs: [
    { name: "TypeScript", count: 9, color: "#3178C6" },
    { name: "JavaScript", count: 6, color: "#F7DF1E" },
    { name: "Python", count: 2, color: "#3572A5" },
  ],
  since: "Nov 2024",
};

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  CSS: "#663399",
  HTML: "#E34C26",
};

async function getStats(): Promise<Stats> {
  // Total CONTRIBUTIONS (what github.com/mubasherdevv shows: "1,491
  // contributions in the last year") comes from GitHub's public
  // contributions page — commits + PRs + issues + reviews. The public
  // REST API has no such total, so we read the number from that page.
  let contributions = FALLBACK.contributions;
  try {
    const html = await (
      await fetch("https://github.com/users/mubasherdevv/contributions", {
        next: { revalidate: 86400 },
        headers: { "User-Agent": "mubasher-portfolio/1.0" },
      })
    ).text();
    const m = html.match(/([\d,]+)\s*contributions\s*in the last year/);
    if (m) contributions = parseInt(m[1].replace(/,/g, ""), 10);
  } catch {
    // keep the verified fallback
  }
  // Total COMMITS (last year) comes from the readme-stats service, which
  // reads GitHub's contribution data — shown as the "including X commits" line.
  let commits = FALLBACK.commits;
  try {
    const svg = await (await fetch("https://github-readme-stats.vercel.app/api?username=mubasherdevv", { next: { revalidate: 86400 } })).text();
    const m = svg.match(/Total Commits\s*\(last year\)\s*:\s*([\d,]+)/);
    if (m) commits = parseInt(m[1].replace(/,/g, ""), 10);
  } catch {
    // keep the verified fallback
  }
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch("https://api.github.com/users/mubasherdevv", { next: { revalidate: 86400 } }),
      fetch("https://api.github.com/users/mubasherdevv/repos?per_page=100", { next: { revalidate: 86400 } }),
    ]);
    if (!userRes.ok || !reposRes.ok) return { ...FALLBACK, commits, contributions };
    const user = await userRes.json();
    const repos: { language: string | null; stargazers_count: number; fork: boolean }[] =
      await reposRes.json();
    const stars = repos.reduce((n, r) => n + (r.stargazers_count || 0), 0);
    const counts: Record<string, number> = {};
    for (const r of repos) {
      if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
    }
    const langs = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([name, count]) => ({ name, count, color: LANG_COLORS[name] ?? "#999" }));
    return {
      repos: user.public_repos ?? FALLBACK.repos,
      stars,
      commits,
      contributions,
      langs: langs.length ? langs : FALLBACK.langs,
      since: user.created_at ? new Date(user.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : FALLBACK.since,
    };
  } catch {
    return { ...FALLBACK, commits, contributions };
  }
}

export default async function GitHubStats() {
  const stats = await getStats();
  const maxLang = Math.max(...stats.langs.map((l) => l.count));

  return (
    <section className="mx-auto max-w-[1180px] px-4 py-16">
      <Reveal>
        <SectionLabel>GitHub</SectionLabel>
        <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
          Code, <span className="text-[#cfcfcf]">in public</span>
        </h2>
        <p className="mt-3 max-w-[560px] text-[16px] leading-relaxed text-[#666]">
          Everything I build lands on GitHub — open source, experiments and client work.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 rounded-[24px] border border-line bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-white">
                <SiGithub size={24} />
              </span>
              <div>
                <p className="text-[18px] font-bold text-ink">@mubasherdevv</p>
                <p className="text-sm text-[#666]">GitHub member since {stats.since}</p>
              </div>
            </div>
            <a
              href="https://github.com/mubasherdevv"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#111] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-black"
            >
              View GitHub Profile →
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-[16px] bg-[#f7f7f7] p-5">
              <p className="text-[36px] font-bold leading-none text-ink">{stats.repos}</p>
              <p className="mt-2 text-sm font-medium text-[#666]">Public repositories</p>
            </div>
            <div className="rounded-[16px] bg-[#f7f7f7] p-5">
              <p className="text-[36px] font-bold leading-none text-ink">{stats.stars}</p>
              <p className="mt-2 text-sm font-medium text-[#666]">Stars earned</p>
            </div>
            <div className="col-span-2 rounded-[16px] bg-[#f7f7f7] p-5 sm:col-span-1">
              <p className="text-sm font-bold text-ink">Top languages</p>
              <div className="mt-3 space-y-2">
                {stats.langs.map((l) => (
                  <div key={l.name} className="flex items-center gap-2 text-sm">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: l.color }} />
                    <span className="w-24 font-medium text-ink">{l.name}</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-[#e8e8e8]">
                      <span className="block h-full rounded-full" style={{ width: `${Math.round((l.count / maxLang) * 100)}%`, background: l.color }} />
                    </span>
                    <span className="w-5 text-right text-[#666]">{l.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contribution graph — rendered from GitHub's public data */}
          <div className="mt-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-ink">Contribution graph</p>
                <p className="mt-1 text-sm text-[#666]">Public commits and pull requests, last 12 months.</p>
              </div>
              <div className="text-right">
                <p className="text-[28px] font-bold leading-none text-ink">{stats.contributions.toLocaleString()}</p>
                <p className="mt-1 text-sm font-medium text-[#666]">total contributions (last year)</p>
                <p className="mt-0.5 text-xs text-[#999]">including {stats.commits.toLocaleString()} commits</p>
              </div>
            </div>
            <div className="mt-3 overflow-x-auto rounded-[16px] border border-line bg-white p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/219653/mubasherdevv"
                alt="Muhammad Mubasher's GitHub contribution graph"
                loading="lazy"
                className="min-w-[720px] w-full"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
