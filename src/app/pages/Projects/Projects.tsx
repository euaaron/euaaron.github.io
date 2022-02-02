import { useEffect, useState } from "react";
import { Search } from "react-feather";
import { MainTitle } from "../../shared/components/MainTitle/MainTitle";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { ProjectDTO } from "./models/ProjectDTO";
import { ProjectsContainer, ProjectsList } from "./Projects.style";
import { ProjectService } from "./services/ProjectService";

export function Projects() {
  const [projects, setProjects] = useState<ProjectDTO[]>([]);

  useEffect(() => {
    ProjectService.getInstance()
      .getProjects()
      .then((data) => setProjects(data));
  }, []);

  return (
    <ProjectsContainer>
      <header>
        <MainTitle>Projetos</MainTitle>
        <label htmlFor="searchProjects">
          <input id="searchProjects" name="searchProjects" type="text" />
          <button type="button" title="Pesquisar projeto">
            <Search />
          </button>
        </label>
      </header>
      <ProjectsList>
        <ul>
          {projects?.map((project) => (
            <li key={project.full_name}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </ProjectsList>
    </ProjectsContainer>
  );
}
