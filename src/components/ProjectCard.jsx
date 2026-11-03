import {
  BookOpen,
  Check,
  ExternalLink,
  Github,
  ListChecks,
  ShoppingCart,
  Users,
  Video,
} from "lucide-react";

const iconMap = {
  cart: ShoppingCart,
  users: Users,
  check: ListChecks,
  video: Video,
};

export const ProjectCard = ({ project, onOpenCaseStudy }) => {
  const Icon = iconMap[project.icon] ?? ListChecks;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        {project.featured && (
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Featured
          </span>
        )}
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {project.subtitle}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-foreground/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border/70 pt-6">
        {project.caseStudy && (
          <button
            type="button"
            onClick={() => onOpenCaseStudy?.(project)}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            <BookOpen className="h-4 w-4" />
            Case study
          </button>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        >
          <Github className="h-4 w-4" />
          Source
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
};
