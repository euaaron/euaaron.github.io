import styled from "styled-components";
import { BorderDiv } from "../../../shared/components/BorderDiv/BorderDiv";

export const ProjectCardStyle = styled(BorderDiv)`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 85vw;
  gap: 0.5rem;
  overflow: hidden;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.25rem 0.5rem;

    background: var(--background);
    filter: ${({ theme }) =>
      theme.type === "light" ? "brightness(0.8)" : "brightness(1.2)"};
  }

  > p {
    flex: 1;
    align-self: center;
    font-weight: normal;
    text-align: center;
    padding: 0.25rem 0.5rem;    
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 0.5rem 0;

    > div:nth-child(1) {
      display: flex;
      align-items: baseline;
      gap: 0.25rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;
        border-radius: 0.25rem 0.25rem 0 0;
        color: var(--primary);

        transition: color 0.4s ease-in-out, background 0.4s ease-in-out;

        &:hover,
        &:focus {
          background: var(--primary);
          color: var(--background);
        }
      }
    }

    > div:nth-child(2) {
      flex: 1;
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      gap: 0.5rem;
      padding-bottom: 0.25rem;

      span {
        display: flex;
        flex-direction: column;

        color: var(--title);
        font-weight: bold;

        small {
          color: var(--foreground);
          font-weight: normal;
        }

        &:nth-child(1) {
          padding-right: 0.25rem;
        }

        ~ span {
          padding-left: 0.75rem;
          border-left: 1px solid var(--disabled);
        }
      }
    }
  }
`;
