import styled from "styled-components";

export const ProjectsContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  gap: 4rem;
  width: 90vw;

  > header {
    top: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    gap: 2rem;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      gap: 0.5rem;

      border-radius: 0.5rem;
      padding: 0.25rem 0.25rem 0.25rem 1rem;
      background: var(--background);
      filter: ${({ theme }) =>
        theme.type === "light" ? "brightness(1.2)" : "brightness(0.8)"};

      &:focus-within {
        outline: 0.25rem solid var(--disabled);
      }

      input {
        flex: 1;
        height: 1.5rem;
        width: calc(20vw + 12rem);

        background: transparent;
        border: none;
        outline: none;
        color: var(--foreground);
        font-size: 1.25rem;
      }

      > button {
        padding: 0.25rem 0.5rem;
        color: var(--foreground);
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;

export const ProjectsList = styled.section`
  display: flex;
  flex-wrap: wrap;  
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
