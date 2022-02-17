import { YoutubeLiveService } from "../../../Addons/LivePlayer/services/YoutubeLiveService/YoutubeLiveService";
import { ProjectService } from "../../../Projects/services/ProjectService";
import { IService } from "./IService";

export class ServiceLoader {
  private static instance: ServiceLoader;
  private services: { [key: string]: IService<any> } = {};

  private constructor() {
    this.loadServices();
  }

  public static getInstance(): ServiceLoader {
    if (!ServiceLoader.instance) {
      ServiceLoader.instance = new ServiceLoader();
    }
    return ServiceLoader.instance;
  }

  public getService(serviceName: string): IService<any> {
    return this.services[serviceName];
  }

  private loadServices(): void {
    this.services["repository"] = ProjectService.getInstance();
    this.services["youtube"] = YoutubeLiveService.getInstance();
  }
}
