import React from "react";
import { FiRefreshCw, FiSearch } from "react-icons/fi";
import { MainTitle } from "../shared/components/MainTitle/MainTitle";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import {
  ErrorContainer,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsList,
  SearchProject
} from "./Projects.style";
import { CodeProject } from "./services/model/CodeProject";
import { ProjectService } from "./services/ProjectService";

type ProjectState = {
  filteredProjects: CodeProject[];
  projects: CodeProject[];
  search: string;
};

export class Projects extends React.Component<{}, ProjectState> {
  constructor(props: any) {
    super(props);
    this.state = {
      filteredProjects: [],
      projects: [],
      search: "",
    };
  }

  componentDidMount() {
    this.updateProjects();
    setTimeout(() => {
      if (this.state.projects.length === 0) {
        this.updateProjects();
      }
    }, 600);
  }

  updateProjects() {
    ProjectService.getInstance()
      .getAll()
      .then((data) => {
        const projects: CodeProject[] = data;
        this.setState({ projects });
        this.setState({ filteredProjects: projects });
      });
  }

  handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ search: event.target.value });
    this.filterProjects(event.target.value);
  }

  filterProjects(search: string) {
    let foundSome = false;
    const filteredProjects = this.state.projects.filter((project) => {
      const searchObj = (searchTerm: string) =>
        RegExp(searchTerm, "i").test(JSON.stringify(project));

      if (project.language === search.toLowerCase()) {
        foundSome = true;
        return true;
      } else {
        if (foundSome) {
          return false;
        }
        return searchObj(search);
      }
    });
    this.setState({ filteredProjects });
  }

  render(): React.ReactNode {
    const { search, projects, filteredProjects } = this.state;
    const isVisible = projects.length === 0 ? false : true;

    return (
      <ProjectsContainer>
        {isVisible ? (
          <ProjectsList>
            <ProjectsHeader>
              <MainTitle>Projetos</MainTitle>
              <SearchProject htmlFor="searchProjects">
                <input
                  id="searchProjects"
                  name="searchProjects"
                  type="text"
                  value={search}
                  onChange={(e) => this.handleSearch(e)}
                />
                <span title="Pesquisar projeto">
                  <FiSearch />
                </span>
              </SearchProject>
            </ProjectsHeader>
            <ul>
              {filteredProjects?.map((project) => (
                <li key={project.fullName}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </ProjectsList>
        ) : (
          <ErrorContainer>
            <i className="devicon-github-original"></i>
            <strong>
              Erro ao buscar dados do GitHub. Volte novamente mais tarde.
            </strong>
            <button
              onClick={() => this.updateProjects()}
              title="Forçar Atualização"
            >
              <FiRefreshCw />
              Forçar atualização
            </button>
          </ErrorContainer>
        )}
      </ProjectsContainer>
    );
  }
}
