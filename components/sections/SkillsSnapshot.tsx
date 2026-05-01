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
    color: "#0f766e",
    skills: [
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "NestJS", icon: `${DEVICON}/nestjs/nestjs-original.svg` },
      { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: "Express", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Dart", icon: `${DEVICON}/dart/dart-original.svg` },
      { name: "Spring Boot", icon: `${DEVICON}/spring/spring-original.svg` },
    ],
  },
  {
    label: "Data & Storage",
    color: "#b45309",
    skills: [
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "PostGIS", mono: "GIS" },
      { name: "Redis", icon: `${DEVICON}/redis/redis-original.svg` },
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "SQLite", icon: `${DEVICON}/sqlite/sqlite-original.svg` },
    ],
  },
  {
    label: "Infrastructure & DevOps",
    color: "#6d5f50",
    skills: [
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "Jenkins", icon: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "GitHub Actions", icon: `${DEVICON}/githubactions/githubactions-original.svg` },
      { name: "Nginx", icon: `${DEVICON}/nginx/nginx-original.svg` },
      { name: "HAProxy", mono: "HA" },
      { name: "Varnish", mono: "VNS" },
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
    ],
  },
  {
    label: "Platform & Cloud",
    color: "#2563eb",
    skills: [
      { name: "GCP", icon: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Azure", icon: `${DEVICON}/azure/azure-original.svg` },
      { name: "Vercel", mono: "VC" },
      { name: "Render", mono: "RN" },
    ],
  },
  {
    label: "Frontend & Mobile",
    color: "#be185d",
    wide: true,
    skills: [
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Flutter", icon: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Swift", icon: `${DEVICON}/swift/swift-original.svg` },
      { name: "Kotlin", icon: `${DEVICON}/kotlin/kotlin-original.svg` },
    ],
  },
];

interface SkillsSnapshotProps {
  home: DictionaryHome;
}

export default function SkillsSnapshot({ home }: SkillsSnapshotProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
        <div className="mb-10 max-w-[58ch]">
          <p className="eyebrow mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Technical Stack
          </p>
          <h2
            className="font-bold leading-tight text-[var(--color-text)]"
            style={{ fontSize: "var(--text-title)" }}
          >
            {home.skillsTitle}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className={`rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 shadow-sm sm:p-5 lg:p-5 ${
                cat.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: cat.color }}
                  aria-hidden="true"
                />
                <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--color-text)] lg:text-xs">
                  {cat.label}
                </h3>
              </div>

              <div className={`grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ${cat.wide ? "max-w-[520px]" : ""}`}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-3 text-center lg:min-h-[82px] lg:px-2 lg:py-2.5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center lg:h-7 lg:w-7">
                      {"icon" in skill ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={skill.icon}
                          alt=""
                          width={28}
                          height={28}
                          loading="lazy"
                          className="h-7 w-7 object-contain lg:h-6 lg:w-6"
                        />
                      ) : (
                        <span
                          className="font-mono text-xs font-bold leading-none"
                          style={{ color: cat.color }}
                        >
                          {skill.mono}
                        </span>
                      )}
                    </div>

                    <span className="line-clamp-2 min-w-0 text-[13px] font-semibold leading-4 text-[var(--color-text)] lg:text-xs">
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
