import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { profile, projects } from "@/data/portfolio";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of full-stack and front-end projects from my learning journey and professional practice."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpenCaseStudy={setSelectedProject}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
          >
            More projects on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
