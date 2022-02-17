import React from "react";
import {
  ExperienceCardContainer,
  ExperienceCardHeader
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
            <h3 title={this.props.title}>{this.props.title}</h3>
            <strong title={this.props.institution}>
              {this.props.institution}
            </strong>
            {this.props.type && <small>{this.props.type}</small>}
          </div>
          {this.props.logo && (
            <img src={this.props.logo} alt={this.props.institution} />
          )}
        </ExperienceCardHeader>
        <p title={String(this.props.children)}>{this.props.children}</p>
        <footer>
          {this.props.startDate && <small>{this.props.startDate}</small>}
          {this.props.endDate && <small>{this.props.endDate}</small>}
        </footer>
      </ExperienceCardContainer>
    );
  }
}
