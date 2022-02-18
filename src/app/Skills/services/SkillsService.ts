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

  getLegends(): Promise<ISkillModel[]> {
    return new Promise((resolve) => {
      resolve([
        { level: 1, name: "Conheço um pouco" },
        { level: 2, name: "Conheço" },
        { level: 3, name: "Possuo exp. acadêmica" },
        { level: 4, name: "Me viro bem" },
        { level: 5, name: "Possuo exp. profissional" },
        { level: 6, name: "Consigo ensinar" },
        { level: 7, name: "Me sinto confiante" },
        { level: 8, name: "Me sinto muito confiante" },
        { level: 9, name: "Criei bibliotecas para essa tecnologia" },
        { level: 10, name: "Contribuo oficialmente para a tecnologia" },
      ]);
    });
  }

  getAll(): Promise<ISkillModel[]> {
    return new Promise((resolve) => {
      const skills = this.sortByNameAndLevelDesc(SkillList);
      resolve(skills);
    });
  }
}
