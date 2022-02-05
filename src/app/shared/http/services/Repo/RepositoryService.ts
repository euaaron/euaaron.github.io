import { StorageService } from "../../../configs/services/StorageService";
import { IService } from "../IService";
import { RepositoryDTO } from "./models/RepositoryDTO";

export class RepositoryService implements IService<RepositoryDTO[]> {
  private static instance: RepositoryService;
  private repositories: Promise<RepositoryDTO[]>;
  private storage: StorageService;

  private constructor() {
    this.storage = StorageService.getInstance();
    this.repositories = this.storeRepositoryData();
  }

  public async getUpdates(): Promise<RepositoryDTO[]> {
    return await fetch("https://api.github.com/users/euaaron/repos")
      .then(async (response) => {
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
      })
      .catch((error) => {
        return [];
      });
  }

  private storeRepositoryData(): Promise<RepositoryDTO[]> {
    const lastRepoCheck = this.storage.lastStore("lastRepoCheck");
    const cachedRepos = this.storage.getItem("repositories");

    if (lastRepoCheck < 30 && cachedRepos.length > 0) {
      let repos: RepositoryDTO[] = [];

      JSON.parse(cachedRepos).forEach((repo: RepositoryDTO) => {
        repos.push(repo);
      });

      this.repositories = new Promise((resolve) => resolve(repos));
    } else {
      this.repositories = this.getUpdates().then((repos: RepositoryDTO[]) => {
        this.storage.setItem("repositories", repos);
        return repos;
      });
    }
    return this.repositories;
  }

  public getInstance(): IService<RepositoryDTO[]> {
    throw new Error("Use the static getInstance() method instead.");
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
