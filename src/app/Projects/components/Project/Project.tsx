import React, { useEffect, useState } from "react";
import { FiChevronRight, FiGithub, FiGlobe } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { NotFound } from "../../../NotFound/NotFound";
import { CodeProject } from "../../services/model/CodeProject";
import { ProjectService } from "../../services/ProjectService";
import {
  BreadcrumbStyle,
  ProjectLinkStyle,
  ProjectMarkdownStyle,
  ProjectStyle,
  SimilarItemStyle,
  SimilarStyle,
  TagListStyle
} from "./ProjectStyle";

export function Project() {
  const [project, setProject] = useState<CodeProject>({} as CodeProject);
  const [notFound, setNotFound] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    ProjectService.getInstance()
      .getAll()
      .then((data: CodeProject[]) => {
        const projects: CodeProject[] = data;
        const project = projects.find((p) => p.name === String(name));
        if (project) {
          setProject(project);
        } else {
          setNotFound(true);
        }
      })
      .catch((err: any) => {
        console.log("Deu ruim, não foi possível carregar o projeto: ", err);
      });
  }, [name]);

  function recreateUrl(fullPath: string[], current: string): string {
    let url = "";
    let currentIndex = 0;
    fullPath.find((item, index) =>
      item === current ? (currentIndex = index) : null
    );
    fullPath.forEach((item, index) => {
      if (index <= currentIndex) {
        url += `/${item}`;
      }
    });
    return url;
  }

  let breadcrumb: string[] = [];
  window.location.pathname.split("/").forEach((item, index) => {
    if (item !== "") {
      breadcrumb.push(item);
    }
  });
  
  if (notFound) {
    return <NotFound />;
  }  

  return (
      <ProjectStyle>
        <aside>
          <BreadcrumbStyle>
            <ul>
              {breadcrumb.map((item, index) => (
                <li key={index}>
                  <Link to={recreateUrl(breadcrumb, item)}>{item}</Link>
                  {index !== breadcrumb.length - 1 && <FiChevronRight />}
                </li>
              ))}
            </ul>
          </BreadcrumbStyle>
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
          {project.similarTo && project.similarTo.length > 0 && (
            <SimilarStyle>
              <h2>Projetos Similares</h2>
              <ul>
                {project.similarTo.map((similar, index) => (
                  <li key={index}>
                    <SimilarItemStyle>
                      <Link to={`/projects/${similar.name}`}>
                        {similar.name}
                      </Link>
                      <span>{similar.reason}</span>
                    </SimilarItemStyle>
                  </li>
                ))}
              </ul>
            </SimilarStyle>
          )}
        </aside>
        {project.readme && project.readme !== "none" && (
          <ProjectMarkdownStyle>
            <ReactMarkdown children={project.readme} remarkPlugins={[remarkGfm]} />
          </ProjectMarkdownStyle>
        )}
      </ProjectStyle>
    );
}
