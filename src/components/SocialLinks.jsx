import { Code2, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const socialItems = [
  { href: profile.links.github, label: "GitHub", icon: Github },
  { href: profile.links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: profile.links.leetcode, label: "LeetCode", icon: Code2 },
];

export const SocialLinks = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialItems.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            title={item.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
};
