import React, { useEffect, useState } from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { NotFound } from "../../../NotFound/NotFound";
import { Breadcrumb } from "../../../shared/components/Breadcrumb/Breadcrumb";
import { CodeProject } from "../../services/model/CodeProject";
import { ProjectService } from "../../services/ProjectService";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import {
  ProjectLinkStyle,
  ProjectMarkdownStyle,
  ProjectStyle,
  SimilarStyle,
  TagListStyle
} from "./ProjectStyle";

export function Project() {
  const [project, setProject] = useState<CodeProject>({} as CodeProject);
  const [similar, setSimilar] = useState<CodeProject[]>([]);
  const [notFound, setNotFound] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const projects = await ProjectService.getInstance().getAll();
      const project = projects.find((p) => p.name === String(name));
      if (project) {
        setProject(project);
        const similars = projects.filter((proj) =>
          project.similarTo?.map((item) => item.name).includes(proj.name)
        );
        setSimilar(similars);
      } else {
        setNotFound(true);
      }
    }
    fetchData();
  }, [name]);

  if (notFound) {
    return <NotFound />;
  }

  return (
    <ProjectStyle>
      <aside>
        <Breadcrumb/>
        <header>
          <h1>{project.name}</h1>
          <ProjectLinkStyle>
            {project.homepage && (
              <a
                className="online"
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                title="Veja o projeto em produção!"
              >
                <FiGlobe /> Online
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Confira o código do projeto!"
            >
              <FiGithub /> GitHub
            </a>
          </ProjectLinkStyle>
          {project.tags && project.tags.length > 0 && (
            <TagListStyle>
              <ul title="tags">
                {project.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </TagListStyle>
          )}
        </header>
        {similar && similar.length > 0 && (
          <SimilarStyle>
            <h2>Projetos Similares</h2>
            <ul>
              {similar.map((item, index) => (
                <li key={index}>
                  <ProjectCard project={item} />
                </li>
              ))}
            </ul>
          </SimilarStyle>
        )}
      </aside>
      {project.readme && project.readme !== "none" && (
        <ProjectMarkdownStyle>
          <ReactMarkdown
            children={project.readme}
            remarkPlugins={[remarkGfm]}
          />
        </ProjectMarkdownStyle>
      )}
    </ProjectStyle>
  );
}
