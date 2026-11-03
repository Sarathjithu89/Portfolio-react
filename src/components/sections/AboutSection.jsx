import { ArrowRight, Cloud, Code2, Layers } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { highlights, profile, softSkills } from "@/data/portfolio";

const iconMap = {
  code: Code2,
  cloud: Cloud,
  layers: Layers,
};

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="A developer who enjoys the full picture"
          description="From designing the interface to shipping the deployment, I like understanding how every part of a product fits together."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            {profile.summary.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80">
                Soft skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <a href="#contact" className="cosmic-button inline-flex items-center justify-center gap-2">
                Let&apos;s work together
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/60 px-6 py-2 font-medium transition-colors hover:border-primary/60 hover:text-primary"
              >
                See my projects
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight) => {
              const Icon = iconMap[highlight.icon] ?? Code2;

              return (
                <div
                  key={highlight.title}
                  className="card-hover rounded-2xl border border-border bg-card/60 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex shrink-0 rounded-xl bg-primary/10 p-2.5 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{highlight.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
