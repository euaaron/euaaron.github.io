import { IService } from "../IService";
import { RepositoryDTO } from "./models/RepositoryDTO";

export class RepositoryService implements IService<RepositoryDTO[]> {
  private static instance: RepositoryService;
  private repositories: Promise<RepositoryDTO[]>;

  private constructor() {
    this.repositories = this.getFromGitHub();
  }
  
  getInstance(): IService<RepositoryDTO[]> {
    throw new Error("Method not implemented.");
  }

  private getFromGitHub(): Promise<RepositoryDTO[]> {
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
