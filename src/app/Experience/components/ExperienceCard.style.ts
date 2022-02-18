import styled from "styled-components";
import { BorderDiv } from "../../shared/components/BorderDiv/BorderDiv";

function getColor(color = "primary") {
  switch (color) {
    case "green":
      return "var(--success)";
    case "red":
      return "var(--danger)";
    case "orange":
      return "var(--warning)";
    case "purple":
      return "var(--secondary)";
    default:
      return "var(--primary)";
  }
}

interface IExperienceCardProps {
  color: string;
}

export const ExperienceCardHeader = styled.header<IExperienceCardProps>`
  display: flex;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    > h3,
    > strong {
      display: block;
      height: 1rem;
      max-width: 14rem;
      overflow: hidden;
      white-space: nowrap;
      --webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      color: var(--title);

      &:overflow {
        &::after {
          content: "...";
          display: inline-block;
        }
      }
    }

    > h3 {
      height: 1.5rem;
    }

    > strong {
      color: ${(props) => getColor(props.color) || "var(--primary)"};
      font-weight: normal;
      line-height: 1.2rem;
      height: 1.2rem;
    }
  }

  > img {
    object-fit: contain;
    object-position: 50% 50%;
    height: 4rem;
    width: 4rem;
    padding: 0.25rem;
    background: #f2f2f9;
  }
`;

export const ExperienceCardContainer = styled(BorderDiv)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  gap: 0.5rem;

  padding: 0.75rem;

  > p {
    flex: 1;
    display: flex;
    max-height: 4.8rem;
    overflow: hidden;
    text-align: justify;
    text-indent: 2rem;
    text-overflow: clip ellipsis;

    &:overflow {
      &::after {
        content: "...";
        display: inline-block;
      }
    }
  }

  > footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    > a {
      justify-self: flex-start;
      background: var(--primary);
      color: var(--background);
      font-weight: bold;
      text-decoration: none;
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      transition: all 0.4s ease-in-out;

      &:hover,
      &:focus {
        background: transparent;
        color: var(--primary);
        outline: solid 0.2rem var(--disabled);
      }
    }

    > span {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;

      > small {
        text-transform: uppercase;
        color: var(--disabled);

        ~ small {
          display: flex;
          gap: 0.5rem;

          &::before {
            content: "•";
            display: inline-block;
            width: 0.5rem;
          }
        }
      }
    }
  }
`;
