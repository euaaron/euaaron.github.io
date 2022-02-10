import React from "react";
import {
  ExperienceCardContainer,
  ExperienceCardHeader,
} from "./ExperienceCard.style";

interface IExperienceCardProps {
  title: string;
  institution: string;
  type?: string;
  startDate?: string;
  endDate?: string;
  logo?: string;
  color: string;
}

export class ExperienceCard extends React.Component<IExperienceCardProps> {
  render() {
    return (
      <ExperienceCardContainer>
        <ExperienceCardHeader color={this.props.color}>
          <div>
            <h3>{this.props.title}</h3>
            <strong>{this.props.institution}</strong>
            {this.props.type && <span>{this.props.type}</span>}
          </div>
          {this.props.logo && (
            <img src={this.props.logo} alt={this.props.institution} />
          )}
        </ExperienceCardHeader>
        {this.props.children}
        <footer>
          {this.props.startDate && <small>{this.props.startDate}</small>}
          {this.props.endDate && <small>{this.props.endDate}</small>}
        </footer>
      </ExperienceCardContainer>
    );
  }
}
