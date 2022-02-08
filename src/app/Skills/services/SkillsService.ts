import { ISkillModel } from "../models/SkillModel";
import { SkillList } from "./SkillListMock";

export class SkillsService {

  private sortByLevelAsc(skillList: ISkillModel[]): ISkillModel[] {
    return skillList.sort((a, b) => {
      return a.level - b.level;
    });
  }

  private sortByLevelDesc(skillList: ISkillModel[]): ISkillModel[] {
    return skillList.sort((a, b) => {
      return b.level - a.level;
    });
  }

  private sortByName(skillList: ISkillModel[]): ISkillModel[] {
    return skillList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  private sortByNameAndLevelAsc(skillList: ISkillModel[]): ISkillModel[] {
    return skillList.sort((a, b) => {
      if (a.level - b.level === 0) {
        return a.name.localeCompare(b.name);
      }
      return a.level - b.level;
    });
  }

  private sortByNameAndLevelDesc(skillList: ISkillModel[]): ISkillModel[] {
    return skillList.sort((a, b) => {
      if (b.level - a.level === 0) {
        return a.name.localeCompare(b.name);
      }
      return b.level - a.level;
    });
  }

  getAll(): Promise<ISkillModel[]> {
    return new Promise((resolve) => {

      const skills = this.sortByNameAndLevelDesc(SkillList);
      resolve(skills);
    })
  }
}