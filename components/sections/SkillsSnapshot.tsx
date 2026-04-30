import type { DictionaryHome } from "@/types/locale";

interface SkillArea {
  label: string;
  items: string[];
  accent: string;
}

const SKILLS: SkillArea[] = [
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "FastAPI", "Express", "Dart"],
    accent: "text-violet-600 bg-violet-50 border-violet-100",
  },
  {
    label: "Data",
    items: ["PostgreSQL", "PostGIS", "Redis", "MySQL"],
    accent: "text-sky-600 bg-sky-50 border-sky-100",
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Docker Swarm", "Jenkins", "Nginx", "HAProxy", "Varnish"],
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    label: "Platform & Protocol",
    items: ["GCP", "Azure", "WebSocket", "gRPC", "REST"],
    accent: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

interface SkillsSnapshotProps {
  home: DictionaryHome;
}

export default function SkillsSnapshot({ home }: SkillsSnapshotProps) {
  return (
    <section className="py-16 sm:py-20 border-t border-[var(--color-border)]">
      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
        <div className="mb-8">
          <p className="mb-1.5 text-[var(--text-label)] font-mono uppercase tracking-widest text-[var(--color-accent)]">
            Stack
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            {home.skillsTitle}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((area) => (
            <div key={area.label}>
              <p className="mb-3 text-xs font-mono uppercase tracking-wide text-[var(--color-text-muted)]">
                {area.label}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-md border px-2 py-0.5 text-xs font-mono ${area.accent}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
