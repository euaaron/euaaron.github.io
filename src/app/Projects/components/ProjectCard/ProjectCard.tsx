import { FiGithub, FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CodeProject } from "../../services/model/CodeProject";
import { ProjectCardStyle } from "./ProjectCard.style";

interface ProjectCardProps {
  project: CodeProject;
  children?: React.ReactNode;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projUrl = project.url.split("euaaron/")[1];
  return (
    <ProjectCardStyle>
      <Link to={`/projects/${projUrl}`}>
        <header>
          <strong>{project.name}</strong>
          <i
            className={`devicon-${project.language}-plain`}
            title={project.language?.toUpperCase()}
          ></i>
        </header>
        <p>{project.description}</p>
      </Link>
      <footer>
        <div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Veja o código do projeto no GitHub!"
          >
            <FiGithub />
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              title="Veja o projeto em produção!"
            >
              <FiGlobe />
            </a>
          )}
        </div>
        <div>
          <span>
            <small>Criado em</small>
            {project.createdAt}
          </span>
          <span>
            <small>Atualizado em</small>
            {project.updatedAt}
          </span>
        </div>
      </footer>
    </ProjectCardStyle>
  );
}
