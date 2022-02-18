import { IExperienceData } from "../../models/IExperienceData";
import { AcademicDataMock } from "./AcademicDataMock";
import { AcademicExtrasMock } from "./AcademicExtrasMock";

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
      const data = AcademicDataMock.sort((a, b) => this.sortByEndDate(b, a));
      const extras = AcademicExtrasMock;
      const dataWithExtras = data
        .map((academic) => {
          const extra = extras.find((item) => item.owner === academic.url);
          if (extra) {
            if (academic.extras) {
              academic.extras = [...academic.extras, extra];
            } else {
              academic.extras = [extra];
            }
          }
          return academic;
        });
      resolve(dataWithExtras);
    });
  }
}
