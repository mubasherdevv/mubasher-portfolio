import Reveal, { SectionLabel } from "./Reveal";
import { experience, education } from "@/lib/data";

function TimelineRow({
  initials,
  color,
  title,
  org,
  date,
  type,
  location,
  description,
}: {
  initials: string;
  color: string;
  title: string;
  org: string;
  date: string;
  type?: string;
  location: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-line py-8 last:border-0 sm:flex-row sm:items-start sm:gap-6">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-sm font-extrabold shadow-sm"
        style={{ color }}
      >
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-[17px] font-bold text-ink">
          {title} <span className="font-semibold text-neutral-500">— {org}</span>
        </h3>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#666]">{description}</p>
      </div>
      <div className="shrink-0 text-left sm:w-40 sm:text-right">
        {date ? <p className="text-sm text-neutral-500">{date}</p> : null}
        {type && <p className="text-[15px] font-bold text-ink">{type}</p>}
        <p className="text-[13px] text-neutral-500">{location}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <section id="experience" className="mx-auto max-w-[1180px] px-4 py-24">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>
        <Reveal delay={0.1} className="mt-4">
          {experience.map((e) => (
            <TimelineRow
              key={e.company}
              initials={e.initials}
              color={e.color}
              title={e.role}
              org={e.company}
              date={e.date}
              type={e.type}
              location={e.location}
              description={e.description}
            />
          ))}
        </Reveal>
      </section>

      <section id="education" className="mx-auto max-w-[1180px] px-4 pb-24">
        <Reveal>
          <SectionLabel>Education</SectionLabel>
        </Reveal>
        <Reveal delay={0.1} className="mt-4">
          {education.map((e) => (
            <TimelineRow
              key={e.school}
              initials={e.initials}
              color={e.color}
              title={e.degree}
              org={e.school}
              date={e.date}
              location={e.location}
              description={e.description}
            />
          ))}
        </Reveal>
      </section>
    </>
  );
}
