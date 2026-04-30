import type { DictionaryHome } from "@/types/locale";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

type Skill =
  | { name: string; icon: string; mono?: never }
  | { name: string; mono: string; icon?: never };

interface Category {
  label: string;
  color: string;
  skills: Skill[];
  wide?: boolean;
}

const CATEGORIES: Category[] = [
  {
    label: "Backend & API",
    color: "#a78bfa",
    skills: [
      { name: "Node.js",    icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "NestJS",     icon: `${DEVICON}/nestjs/nestjs-original.svg` },
      { name: "FastAPI",    icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: "Express",    icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Dart",       icon: `${DEVICON}/dart/dart-original.svg` },
    ],
  },
  {
    label: "Data & Storage",
    color: "#38bdf8",
    skills: [
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "PostGIS",    mono: "GIS" },
      { name: "Redis",      icon: `${DEVICON}/redis/redis-original.svg` },
      { name: "MySQL",      icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "SQLite",     icon: `${DEVICON}/sqlite/sqlite-original.svg` },
    ],
  },
  {
    label: "Infrastructure & DevOps",
    color: "#34d399",
    skills: [
      { name: "Docker",         icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "Jenkins",        icon: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "GitHub Actions", icon: `${DEVICON}/githubactions/githubactions-original.svg` },
      { name: "Nginx",          icon: `${DEVICON}/nginx/nginx-original.svg` },
      { name: "HAProxy",        mono: "HA" },
      { name: "Varnish",        mono: "VNS" },
      { name: "Git",            icon: `${DEVICON}/git/git-original.svg` },
    ],
  },
  {
    label: "Platform & Cloud",
    color: "#fbbf24",
    skills: [
      { name: "GCP",    icon: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Azure",  icon: `${DEVICON}/azure/azure-original.svg` },
      { name: "Vercel", mono: "▲" },
      { name: "Render", mono: "RN" },
    ],
  },
  {
    label: "Frontend & Mobile",
    color: "#f472b6",
    wide: true,
    skills: [
      { name: "React",   icon: `${DEVICON}/react/react-original.svg` },
      { name: "Flutter", icon: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Swift",   icon: `${DEVICON}/swift/swift-original.svg` },
      { name: "Kotlin",  icon: `${DEVICON}/kotlin/kotlin-original.svg` },
    ],
  },
];

interface SkillsSnapshotProps {
  home: DictionaryHome;
}

export default function SkillsSnapshot({ home }: SkillsSnapshotProps) {
  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)]">
      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">

        {/* Section header */}
        <div className="mb-14">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Technical Stack
          </p>
          <h2
            className="font-bold tracking-tight text-[var(--color-text)]"
            style={{ fontSize: "var(--text-title)" }}
          >
            {home.skillsTitle}
          </h2>
          <p className="mt-3 max-w-[52ch] text-sm text-[var(--color-text-muted)] leading-relaxed">
            Tools and technologies I have used to design, build, and operate production systems.
          </p>
        </div>

        {/* Category grid — 2 col, last item spans full width */}
        <div className="grid gap-10 lg:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className={cat.wide ? "lg:col-span-2" : ""}>
              {/* Category label */}
              <div className="mb-5 flex items-center gap-2.5">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: cat.color }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
                <span className="flex-1 border-t" style={{ borderColor: `${cat.color}22` }} aria-hidden="true" />
              </div>

              {/* Skill cards */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex w-[84px] flex-col items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-3.5 transition-all duration-200 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-3)] hover:shadow-[0_0_20px_var(--color-accent-glow)]"
                  >
                    {/* Icon or monogram */}
                    <div className="flex h-9 w-9 items-center justify-center">
                      {skill.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          width={36}
                          height={36}
                          loading="lazy"
                          className="h-9 w-9 object-contain opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                        />
                      ) : (
                        <span
                          className="font-mono font-bold leading-none"
                          style={{
                            color: cat.color,
                            fontSize: skill.mono.length <= 2 ? "1.125rem" : "0.75rem",
                          }}
                        >
                          {skill.mono}
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <span className="line-clamp-2 w-full text-center font-sans text-[11px] font-medium leading-tight text-[var(--color-text-muted)] transition-colors duration-200 group-hover:text-[var(--color-text)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
