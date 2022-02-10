import React from "react";
import { MainSubtitle } from "../../shared/components/MainSubtitle/MainSubtitle";
import { MainTitle } from "../../shared/components/MainTitle/MainTitle";
import { ExperienceCard } from "../components/ExperienceCard";
import { IExperienceData } from "../models/IExperienceData";
import { AcademicContainer } from "./Academic.style";
import { AcademicService } from "./services/AcademicService";

type IAcademicState = {
  academicData: IExperienceData[];
};

export class AcademicExperience extends React.Component<{}, IAcademicState> {
  private academicService: AcademicService;

  constructor(props: {}) {
    super(props);
    this.state = {
      academicData: [],
    };
    this.academicService = AcademicService.getInstance();
  }

  componentDidMount() {
    this.academicService.getAll().then((data: IExperienceData[]) => {
      this.setState({ academicData: data });
    });
  }

  render() {
    return (
      <AcademicContainer>
        <header>
          <MainTitle>Experiência</MainTitle>
          <MainSubtitle>Acadêmica</MainSubtitle>
        </header>
        <ul>
          {this.state.academicData.map((experience: IExperienceData, index) => {
            return (
              <li>
                <ExperienceCard
                  key={index}
                  title={experience.title}
                  institution={experience.institution}
                  type={experience.type}
                  color={experience.color}
                  logo={experience.logo}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                >
                  <p>{experience.description}</p>
                </ExperienceCard>
              </li>
            );
          })}
        </ul>
      </AcademicContainer>
    );
  }
}
