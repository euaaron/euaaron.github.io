import { IExperienceExtras } from "../Academic/services/AcademicExtrasMock";

export interface IExperienceData {
  url?: string;
  website?: string;
  title: string;
  institution: string;
  type: string;
  color: "green" | "blue" | "orange" | "purple" | "red";
  logo: string;
  startDate: string;
  endDate: string;
  description: string;
  extras?: IExperienceExtras[];
}
