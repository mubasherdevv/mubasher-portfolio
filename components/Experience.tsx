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
    <div className="flex gap-4 border-b border-line py-7 last:border-0 sm:gap-6">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h3 className="text-lg font-extrabold text-ink">{title}</h3>
          <span className="text-sm font-semibold text-neutral-500">{org}</span>
        </div>
        {date ? <p className="mt-0.5 text-sm font-medium text-neutral-500">{date}</p> : null}
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">{description}</p>
        <p className="mt-2 text-sm">
          {type && <span className="font-bold text-ink">{type}</span>}
          {type && <span className="text-neutral-400"> · </span>}
          <span className="text-neutral-500">{location}</span>
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
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

      <section id="education" className="mx-auto max-w-6xl px-4 py-8">
        <Reveal>
          <SectionLabel>Education</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
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
