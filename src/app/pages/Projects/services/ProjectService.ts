
import { ServiceLoader } from "../../../shared/http/services/ServiceLoader";
import { ProjectDTO } from "../models/ProjectDTO";

export class ProjectService {
  private static instance: ProjectService;
  private projects: Promise<ProjectDTO[]>;

  private constructor() {
    this.projects = this.loadProjects();
  }

  private loadProjects(): Promise<ProjectDTO[]> {
    return ServiceLoader.getInstance().getService('repository').getAll();
  }

  public static getInstance(): ProjectService {
    if (!ProjectService.instance) {
      ProjectService.instance = new ProjectService();
    }
    return ProjectService.instance;
  }

  public getProjects(): Promise<ProjectDTO[]> {
    return this.projects;
  }
}
