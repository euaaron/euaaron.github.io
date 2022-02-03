import React from "react";
import { Search } from "react-feather";
import { MainTitle } from "../shared/components/MainTitle/MainTitle";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { ProjectDTO } from "./models/ProjectDTO";
import { ProjectsContainer, ProjectsList } from "./Projects.style";
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

      if (project.language === search) {
        foundSome = true;
        return true;
      }

      if (foundSome) {
        return false;
      }

      if (project.language !== search) {
        return searchObj(search);
      }

      return searchObj(search);
    });
    this.setState({ filteredProjects });
  }

  render(): React.ReactNode {
    return (
      <ProjectsContainer>
        <header>
          <MainTitle>Projetos</MainTitle>
          <label htmlFor="searchProjects">
            <input
              id="searchProjects"
              name="searchProjects"
              type="text"
              value={this.state.search}
              onChange={(e) => this.handleSearch(e)}
            />
            <button type="button" title="Pesquisar projeto">
              <Search />
            </button>
          </label>
        </header>
        <ProjectsList>
          {this.state.filteredProjects?.map((project) => (
            <li key={project.full_name}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ProjectsList>
      </ProjectsContainer>
    );
  }
}
