import { IService } from "../IService";
import { RepositoryDTO } from "./models/RepositoryDTO";

export class RepositoryService implements IService<RepositoryDTO[]> {
  private static instance: RepositoryService;
  private repositories: Promise<RepositoryDTO[]>;

  private constructor() {
    this.repositories = this.cacheRepositoryData();
  }

  public getUpdates(): Promise<RepositoryDTO[]> {
    return fetch("https://api.github.com/users/euaaron/repos").then(
      (response) => {
        return response
          .json()
          .then((data) => {
            return data.map((repo: RepositoryDTO) => {
              return repo as RepositoryDTO;
            });
          })
          .then((data) =>
            data.filter((repo: RepositoryDTO) => repo.fork === false)
          );
      }
    );
  }

  private cacheRepositoryData(): Promise<RepositoryDTO[]> {
    const lastReposUpdate = localStorage.getItem("lastReposUpdate");
    const cachedRepos = localStorage.getItem("repositories");

    if (lastReposUpdate && cachedRepos) {
      const lastUpdate = new Date(lastReposUpdate).getMinutes();
      const now = new Date().getMinutes();

      if (now - lastUpdate < 30) {
        let repos: RepositoryDTO[] = [];

        JSON.parse(cachedRepos).forEach((repo: RepositoryDTO) => {
          repos.push(repo);
        });

        this.repositories = new Promise((resolve) => resolve(repos));
      }
      return this.repositories;
    }

    this.repositories = this.getUpdates();

    return this.repositories.then((repos: RepositoryDTO[]) => {
      localStorage.setItem("repositories", JSON.stringify(repos));
      localStorage.setItem("lastReposUpdate", new Date().toString());
      return repos;
    });
  }

  public getInstance(): IService<RepositoryDTO[]> {
    throw new Error("Method not implemented.");
  }

  public static getInstance(): RepositoryService {
    if (!RepositoryService.instance) {
      RepositoryService.instance = new RepositoryService();
    }
    return RepositoryService.instance;
  }

  public getAll(): Promise<RepositoryDTO[]> {
    return this.repositories;
  }
}
