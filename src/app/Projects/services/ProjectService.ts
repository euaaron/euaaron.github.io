import { ServiceLoader } from "../../shared/http/services/ServiceLoader";
import { date } from "../../shared/utils/time";
import { ProjectDTO } from "../models/ProjectDTO";

export class ProjectService {
  private static instance: ProjectService;
  private projects: Promise<ProjectDTO[]>;

  private constructor() {
    this.projects = this.loadProjects();
  }

  private loadProjects(): Promise<ProjectDTO[]> {
    return ServiceLoader.getInstance().getService("repository").getAll();
  }

  private transformProjectLanguage(projects: ProjectDTO[]): ProjectDTO[] {
    return projects.map((project) => {
      let language = project.language && project.language.toLowerCase();
      const createdAt = date(new Date(project.created_at));
      const updatedAt = date(new Date(project.updated_at));

      if (language === "css") {
        language = "css3";
      }
      return {
        ...project,
        language,
        created_at: createdAt,
        updated_at: updatedAt,
      };
    });
  }

  public static getInstance(): ProjectService {
    if (!ProjectService.instance) {
      ProjectService.instance = new ProjectService();
    }
    return ProjectService.instance;
  }

  public getProjects(): Promise<ProjectDTO[]> {
    return this.projects.then((projects) =>
      this.transformProjectLanguage(projects)
    );
  }
}
