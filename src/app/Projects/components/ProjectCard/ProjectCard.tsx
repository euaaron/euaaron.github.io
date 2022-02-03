import { GitHub, Globe } from "react-feather";
import { ProjectDTO } from "../../models/ProjectDTO";
import { ProjectCardStyle } from "./ProjectCard.style";

interface ProjectCardProps {
  project: ProjectDTO;
  children?: React.ReactNode;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ProjectCardStyle>
      <header>
        <strong>{project.name}</strong>
        <i className={`devicon-${project.language}-plain`} title={project.language?.toUpperCase()}></i>
      </header>
      <p>{project.description}</p>
      <footer>
        <div>
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title="Veja o código do projeto no GitHub!"
          >
            <GitHub />
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              title="Veja o projeto em produção!"
            >
              <Globe />
            </a>
          )}
        </div>
        <div>
          <span>
            <small>Criado em</small>
            {project.created_at}
          </span>
          <span>
            <small>Atualizado em</small>
            {project.updated_at}
          </span>
        </div>
      </footer>
    </ProjectCardStyle>
  );
}
