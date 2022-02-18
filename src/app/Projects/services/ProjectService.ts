import axios from "axios";
import { PROJECTS_API } from "../../shared/configs/environment";
import { StorageService } from "../../shared/configs/services/StorageService";
import { IService } from "../../shared/http/services/IService";
import { CodeProject } from "./model/CodeProject";

export class ProjectService implements IService<CodeProject[]> {
  private static instance: ProjectService;
  private storage: StorageService;
  private projects: Promise<CodeProject[]>;

  private constructor() {
    this.storage = StorageService.getInstance();
    this.projects = this.getAll();
  }

  public static getInstance(): ProjectService {
    if (!ProjectService.instance) {
      ProjectService.instance = new ProjectService();
    }
    return ProjectService.instance;
  }

  public getInstance(): ProjectService {
    return ProjectService.getInstance();
  }

  /**
   * @description
   * @returns Promise<CodeProject[]>
   */
  public async getAll(): Promise<CodeProject[]> {
    let allProjects: CodeProject[] = await this.projects;
    if (!allProjects || allProjects.length === 0) {
      const cached: CodeProject[] = await this.getFromLocalStorage();
      if (cached && cached.length > 0) {
        allProjects = cached;
      } else {
        allProjects = await this.getUpdates();
      }
    }
    return Promise.resolve(allProjects);
  }

  /**
   * @method getUpdates
   * @description Get all projects from ProjectService or from cache
   * @returns Promise<CodeProject[]>
   */
  public async getUpdates(): Promise<CodeProject[]> {
    return new Promise(async () => {
      const api = axios.create({ baseURL: PROJECTS_API, responseType: "json" });
      await api.get("/projects")
        .then((resp) => {
          console.log(resp);
          const response = resp.data;
          return response;
        })
        .then((data) => {
          const projects: CodeProject[] = data;
          this.setProjects(projects);
          return projects;
        })
        .catch((err) => {
          return [];
        });
    });
  }

  private getFromLocalStorage(): Promise<CodeProject[]> {
    const hasProjects = this.storage.hasStored("projects");
    if (hasProjects) {
      const projects = this.storage.getItem("projects");
      return JSON.parse(projects);
    }
    return Promise.resolve([]);
  }

  /**
   * @method setProjects
   * @description Set the projects in the local storage
   * @param projects
   */
  private async setProjects(projects: CodeProject[]): Promise<void> {
    this.projects = Promise.resolve(projects);
    this.storage.setItem("projects", JSON.stringify(projects));
  }
}
