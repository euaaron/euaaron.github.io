import { useEffect, useState } from "react";
import { FiXCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { NotFound } from "../../../NotFound/NotFound";
import { Breadcrumb } from "../../../shared/components/Breadcrumb/Breadcrumb";
import { IExperienceData } from "../../models/IExperienceData";
import { IExperienceExtras } from "../services/AcademicExtrasMock";
import { AcademicService } from "../services/AcademicService";
import {
  AcademicDetailsContainer,
  AcademicDetailsContent,
  AcademicDetailsInfo,
  ActivityContainer,
  ExtrasNav
} from "./AcademicDetailsStyle";

interface IPannelContent {
  title: string;
  description: string;
  activities?: any[];
}

export function AcademicDetails() {
  const { name } = useParams();
  const [exp, setExp] = useState<IExperienceData>({} as IExperienceData);
  const [extras, setExtras] = useState<IExperienceExtras[]>(
    {} as IExperienceExtras[]
  );
  const [pannelContent, setPannelContent] = useState<IPannelContent>(
    {} as IPannelContent
  );
  const [notFound, setNotFound] = useState(false);
  const service = AcademicService.getInstance();

  useEffect(() => {
    service.getAll().then((experiences) => {
      const item = experiences.find((exp) => exp.url === name);
      if (item) {
        setExp(item);
        item.extras && setExtras(filterDuplicatedExtras(item.extras));
        setPannelContent({
          title: "Descrição",
          description: item.description,
        });
      } else {
        setNotFound(true);
      }
    });
  }, [service, name]);

  function filterDuplicatedExtras(ext: IExperienceExtras[]) {
    const extras: IExperienceExtras[] = [];
    ext.forEach((extra) => {
      if (!extras.find((e) => e.name === extra.name)) {
        extras.push(extra);
      }
    });
    return extras;
  }

  function changePannel(
    title: string,
    description: string,
    activities?: any[]
  ) {
    setPannelContent({
      title,
      description,
      activities,
    });
  }

  function render() {
    const {
      logo,
      type,
      color,
      title,
      endDate,
      startDate,
      description,
      institution,
    } = exp;
    return (
      <AcademicDetailsContainer>
        <AcademicDetailsInfo color={color}>
          <Breadcrumb />
          <header>
            <img src={logo} alt={institution} title={institution} />
            <div>
              <h1>{institution}</h1>
              <h2>{title}</h2>
              <span>{type}</span>
              <div>
                <small>{startDate}</small>
                <small>{endDate}</small>
              </div>
            </div>
          </header>
          <ExtrasNav>
            {extras && extras.length > 0 && (
              <ul>
                {extras.map((extra, index) => (
                  <li key={index}>
                    <h3>{extra.name}</h3>
                    {extra.content.map((content, index) => (
                      <button
                        key={index}
                        title={content.title}
                        onClick={() =>
                          changePannel(
                            content.title,
                            content.description,
                            content.activities
                          )
                        }
                      >
                        {content.title}
                      </button>
                    ))}
                  </li>
                ))}
              </ul>
            )}
          </ExtrasNav>
        </AcademicDetailsInfo>
        <AcademicDetailsContent>
          {pannelContent.description !== description && (
            <button onClick={() => changePannel("Descrição", description)}>
              <FiXCircle />
            </button>
          )}
          <h2>{pannelContent.title}</h2>
          <p>{pannelContent.description}</p>
          {pannelContent.activities && (
            <ul>
              {pannelContent.activities.map((activity, index) => (
                <li key={index}>
                  <header>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </header>
                  {activity.result && (
                    <ActivityContainer
                      dangerouslySetInnerHTML={{ __html: activity.result }}
                    ></ActivityContainer>
                  )}
                </li>
              ))}
            </ul>
          )}
        </AcademicDetailsContent>
      </AcademicDetailsContainer>
    );
  }

  return notFound ? <NotFound /> : render();
}
