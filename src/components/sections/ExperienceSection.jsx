import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { education, experience } from "@/data/portfolio";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & Education"
          description="A mix of engineering discipline, structured learning and hands-on full-stack development."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold">Experience</h3>
            </div>

            <div className="relative border-l border-border pl-6">
              {experience.map((item) => (
                <div key={`${item.role}-${item.company}`} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                  <div className="rounded-2xl border border-border bg-card/60 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">{item.role}</h4>
                        <p className="text-sm text-primary">{item.company}</p>
                      </div>
                      <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold">Education</h3>
            </div>

            <div className="space-y-3">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="card-hover rounded-2xl border border-border bg-card/60 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                    <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
