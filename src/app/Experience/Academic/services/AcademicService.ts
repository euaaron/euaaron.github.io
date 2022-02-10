import { IExperienceData } from "../../models/IExperienceData";
import { AcademicDataMock } from "./AcademicDataMock";

export class AcademicService {
  private static instance: AcademicService;

  public static getInstance(): AcademicService {
    if (!AcademicService.instance) {
      AcademicService.instance = new AcademicService();
    }
    return AcademicService.instance;
  }

  private hasOver(a: IExperienceData) {
    const endDate = a.endDate.toLowerCase();
    return endDate === "atualmente" || endDate || "present";
  }

  private sortByEndDate(a: IExperienceData, b: IExperienceData): number {
    if (a.endDate && b.endDate) {
      if (this.hasOver(a) && !this.hasOver(b)) {
        return -1;
      }
      if (!this.hasOver(a) && this.hasOver(b)) {
        return 1;
      }
      const endA = Number(a.endDate.split(" ")[1]);
      const endB = Number(b.endDate.split(" ")[1]);
      return endA - endB;
    }
    return 0;
  }

  public getAll(): Promise<IExperienceData[]> {
    return new Promise<IExperienceData[]>((resolve, reject) => {
      const data = AcademicDataMock;
      resolve(data.sort((a, b) => this.sortByEndDate(b, a)));
    });
  }
}
