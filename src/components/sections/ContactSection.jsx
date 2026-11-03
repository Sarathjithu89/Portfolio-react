import { Download, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/portfolio";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful"
          description="I'm open to full-stack developer roles and interesting projects. The fastest way to reach me is by email."
        />

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-card/60 p-7 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Have a project in mind?
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                Send me a message and I&apos;ll get back to you. You can also
                download my resume for a quick overview of my experience.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="cosmic-button inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Send an email
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-6 py-2 font-medium transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 transition-colors hover:border-primary/40"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 transition-colors hover:border-primary/40"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">{profile.phone}</span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">{profile.location}</span>
              </div>

              <SocialLinks className="justify-center pt-1 lg:justify-start" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
