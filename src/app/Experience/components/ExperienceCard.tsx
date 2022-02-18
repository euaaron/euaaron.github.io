import React from "react";
import { Link } from "react-router-dom";
import {
  ExperienceCardContainer,
  ExperienceCardHeader
} from "./ExperienceCard.style";

interface IExperienceCardProps {
  url?: string;
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
    const {
      color,
      title,
      type,
      institution,
      children,
      endDate,
      logo,
      startDate,
      url,
    } = this.props;
    return (
      <ExperienceCardContainer>
        <ExperienceCardHeader color={color}>
          <div>
            <h3 title={title}>{title}</h3>
            <strong title={institution}>{institution}</strong>
            {type && <small>{type}</small>}
          </div>
          {logo && <img src={logo} alt={institution} title={institution} />}
        </ExperienceCardHeader>
        <p title={String(children)}>{children}</p>
        <footer>
          {url && <Link to={`/experience/${url}`}>Veja mais</Link>}
          {(startDate || endDate) && (
            <span>
              {startDate && <small>{startDate}</small>}
              {endDate && <small>{endDate}</small>}
            </span>
          )}
        </footer>
      </ExperienceCardContainer>
    );
  }
}
