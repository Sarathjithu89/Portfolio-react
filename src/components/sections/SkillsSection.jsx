import {
  Cloud,
  Database,
  Layout,
  Layers,
  Server,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

const iconMap = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  layers: Layers,
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="A practical toolkit for building, securing and deploying full-stack web applications."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Layers;

            return (
              <div
                key={group.title}
                className="card-hover rounded-2xl border border-border bg-card/60 p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
