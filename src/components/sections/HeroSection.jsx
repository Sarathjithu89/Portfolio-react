import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/portfolio";

const floatingBadges = [
  { label: "React", className: "-left-4 top-10" },
  { label: "Node.js", className: "-right-3 top-24", delay: "1.5s" },
  { label: "MongoDB", className: "bottom-8 -left-2", delay: "3s" },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-12 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            {profile.availability}
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-gradient">Sarath A</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/90 sm:text-2xl">
              {profile.role}
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#projects" className="cosmic-button w-full sm:w-auto">
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-2 font-medium transition-colors hover:border-primary/60 hover:text-primary sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <SocialLinks />
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-60 sm:w-72 lg:w-80">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-full bg-primary/20 blur-2xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-full border border-primary/30 bg-card p-2 shadow-2xl shadow-primary/10">
            <img
              src="/icons/profile.png"
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full rounded-full object-cover"
              loading="eager"
            />
          </div>

          {floatingBadges.map((badge) => (
            <div
              key={badge.label}
              className={`absolute hidden animate-float items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur sm:flex ${badge.className}`}
              style={{ animationDelay: badge.delay ?? "0s" }}
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};
