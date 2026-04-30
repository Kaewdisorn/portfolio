import type { DictionaryHome } from "@/types/locale";

interface SkillArea {
  label: string;
  items: string[];
}

const SKILLS: SkillArea[] = [
  {
    label: "Backend Systems",
    items: ["Go", "Node.js", "Python", "gRPC", "REST", "GraphQL"],
  },
  {
    label: "Data & Messaging",
    items: ["Apache Kafka", "Redis", "PostgreSQL", "Elasticsearch", "ClickHouse"],
  },
  {
    label: "Infrastructure",
    items: ["Kubernetes", "Docker", "Terraform", "AWS", "GCP"],
  },
  {
    label: "Observability",
    items: ["Prometheus", "Grafana", "OpenTelemetry", "Datadog"],
  },
];

interface SkillsSnapshotProps {
  home: DictionaryHome;
}

export default function SkillsSnapshot({ home }: SkillsSnapshotProps) {
  return (
    <section className="py-16 sm:py-20 border-t border-[var(--color-border)]">
      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
        <h2 className="mb-8 text-xl font-semibold text-[var(--color-text)]">
          {home.skillsTitle}
        </h2>
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
                    className="rounded px-2 py-0.5 text-xs font-mono bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
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
