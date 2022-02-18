import styled from "styled-components";
import { BorderDiv } from "../../../shared/components/BorderDiv/BorderDiv";

export const AcademicDetailsContainer = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;

  position: relative;
  padding: 4rem 4rem 2rem;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  @media screen and(max-width: 900px) {
    flex-direction: column;
  }
`;

export const AcademicDetailsContent = styled(BorderDiv)`
  flex: 1;
  min-width: 300px;
  flex-direction: column;
  position: relative;
  padding: 2rem;

  > button {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: 1rem;
    top: 1rem;

    font-size: 1.5rem;
    color: var(--disabled);
  }

  > ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;

    > li {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      gap: 2rem;
    }
  }

  > h2 {
    line-height: 3rem;
    color: var(--title);
  }

  p {
    text-indent: 2rem;
    text-align: justify;
  }
`;

export const ActivityContainer = styled.div`
  audio {
    border-radius: none;
  }
`;

export const AcademicDetailsInfo = styled.div<AcademicDetailsProps>`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  > header {
    display: flex;
    gap: 1rem;

    > img {
      object-fit: contain;
      padding: 0.5rem;
      background: #fffefe;
      width: 6rem;
      height: 6rem;
    }

    > div {
      h1,
      h2,
      span {
        text-transform: uppercase;
      }

      h2 {
        color: var(--title);
      }

      h1 {
        font-size: 1rem;
        color: ${(props) => getColor(props.color)};
      }

      > div {
        display: flex;
        align-items: center;
        position: relative;
        gap: 1rem;

        small {
          top: 0.8rem;
          position: relative;
          text-transform: uppercase;

          ~ small {
            position: relative;
            padding-left: 0.5rem;

            &::before {
              content: "";
              position: absolute;
              top: 0.35rem;
              left: -0.5rem;
              width: 0.5rem;
              height: 0.25rem;
              border-radius: 0.5rem;
              background: var(--primary);
            }
          }
        }
      }
    }
  }
`;

export const ExtrasNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;

    > li {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h3 {
        text-transform: uppercase;
        color: var(--title);
      }

      button {
        position: relative;
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;
        color: var(--primary);

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -0.5rem;
          height: 0%;
          transition: all 0.5s ease-in-out;
        }

        &:hover,
        &:focus {
          &::after {
            top: 0;
            width: 0.5rem;
            height: 100%;
            background: var(--secondary);
            opacity: 0.5;
          }
        }
      }
    }
  }
`;

interface AcademicDetailsProps {
  color?: string;
}

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
