import React from "react";
import { RefreshCw, Search } from "react-feather";
import { MainTitle } from "../shared/components/MainTitle/MainTitle";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { ProjectDTO } from "./models/ProjectDTO";
import {
  ErrorContainer,
  ProjectsContainer,
  ProjectsList,
  SearchProject
} from "./Projects.style";
import { ProjectService } from "./services/ProjectService";

type ProjectState = {
  hasLoaded: boolean;
  filteredProjects: ProjectDTO[];
  projects: ProjectDTO[];
  search: string;
};

export class Projects extends React.Component<{}, ProjectState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasLoaded: false,
      filteredProjects: [],
      projects: [],
      search: "",
    };
  }

  componentDidMount() {
    this.handleProjects();
  }

  initProjects() {
    ProjectService.getInstance()
      .getProjects()
      .then((data) => {
        this.setState({ projects: data });
        this.setState({ filteredProjects: data });
      });
  }

  handleProjects() {
    if (!this.state.hasLoaded) {
      this.initProjects();
      this.setState({ hasLoaded: true });
    }
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
    const isVisible = this.state.filteredProjects.length === 0 ? false : true;
    return (
      <ProjectsContainer>
        <MainTitle>Projetos</MainTitle>
        {isVisible ? (
          <ProjectsList>
            <SearchProject htmlFor="searchProjects">
              <input
                id="searchProjects"
                name="searchProjects"
                type="text"
                value={this.state.search}
                onChange={(e) => this.handleSearch(e)}
              />
              <span title="Pesquisar projeto">
                <Search />
              </span>
            </SearchProject>
            <ul>
              {this.state.filteredProjects?.map((project) => (
                <li key={project.full_name}>
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
              onClick={() => this.initProjects()}
              title="Forçar Atualização"
            >
              <RefreshCw />
              Forçar atualização
            </button>
          </ErrorContainer>
        )}
      </ProjectsContainer>
    );
  }
}
