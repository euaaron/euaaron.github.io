import React from "react";
import { MainTitle } from "../shared/components/MainTitle/MainTitle";
import { ISkillModel } from "./models/SkillModel";
import { SkillsService } from "./services/SkillsService";
import { SkillBar } from "./SkillBar/SkillBar";
import { SkillsBox, SkillsContainer, SkillsHeader } from "./Skills.style";

type ISkillsState = {
  skillsList: ISkillModel[];
  legend: ISkillModel[];
};

export class Skills extends React.Component<{}, ISkillsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      skillsList: [],
      legend: [],
    };
  }

  componentDidMount() {
    new SkillsService().getAll().then((skillsList: ISkillModel[]) => {
      this.setState({
        skillsList,
      });
    });

    new SkillsService().getLegends().then((legendList: ISkillModel[]) => {
      this.setState({
        legend: legendList,
      });
    });
  }

  render() {
    const legends = this.state.legend;
    return (
      <SkillsContainer>
        <div>
          <SkillsHeader>
            <MainTitle>Habilidades</MainTitle>
          </SkillsHeader>
          <SkillsBox>
            <ul>
              {this.state.skillsList.map((skill: ISkillModel, index) => {
                return (
                  <li key={index}>
                    <span>{legends.find(legend => legend.level === skill.level)?.name}</span>
                    <SkillBar skillLevel={skill.level} skillName={skill.name} />
                  </li>
                );
              })}
            </ul>
          </SkillsBox>
        </div>
      </SkillsContainer>
    );
  }
}
