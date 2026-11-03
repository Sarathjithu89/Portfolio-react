import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const linkClasses = (href, mobile = false) =>
    cn(
      "transition-colors hover:text-primary",
      mobile
        ? "rounded-xl px-4 py-3 text-base font-medium"
        : "text-sm font-medium",
      activeHash === href
        ? "text-primary"
        : mobile
          ? "text-foreground/80"
          : "text-foreground/70",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight"
          onClick={() => setIsMenuOpen(false)}
        >
          Sarath <span className="text-primary">A</span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={activeHash === item.href ? "page" : undefined}
                  className={linkClasses(item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground transition-colors hover:border-primary/50 hover:text-primary md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={cn(
          "fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="container flex flex-col gap-1 py-4"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              aria-current={activeHash === item.href ? "page" : undefined}
              className={linkClasses(item.href, true)}
            >
              {item.name}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="cosmic-button mt-3 justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};
