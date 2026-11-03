import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Lightbulb,
  X,
} from "lucide-react";

export const CaseStudyModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const study = project.caseStudy;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled])',
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border bg-background p-6 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Behind the build
            </p>
            <h2
              id="case-study-title"
              className="mt-2 font-display text-2xl font-bold sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.subtitle}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-7">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
            The problem
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {study.problem}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card/60 p-4 sm:p-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
            Architecture
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {study.architecture.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-lg border border-border bg-background/70 px-3 py-2 text-xs font-medium">
                  {step}
                </span>
                {index < study.architecture.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-muted-foreground"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 text-primary">
              <Lightbulb className="h-4 w-4" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em]">
                Challenge
              </h3>
            </div>
            <p className="mt-3 text-sm font-medium">
              {study.challenge.title}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4 sm:p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
              How I solved it
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {study.challenge.solution}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
            Key decisions
          </h3>
          <ul className="mt-3 space-y-3">
            {study.decisions.map((decision) => (
              <li key={decision.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium">{decision.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {decision.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-border bg-muted/30 p-4 sm:p-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
            What I&apos;d improve next
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {study.next}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-border pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="cosmic-button gap-2"
          >
            <Github className="h-4 w-4" />
            Source code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-2 font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};
