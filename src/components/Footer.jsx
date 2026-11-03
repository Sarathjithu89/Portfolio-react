import { ArrowUp } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border/70">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold">
            Sarath <span className="text-primary">A</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {year} Sarath A. Built with React, Vite and Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <SocialLinks />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            title="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
