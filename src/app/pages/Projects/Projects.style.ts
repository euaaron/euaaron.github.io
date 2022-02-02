import styled from "styled-components";

export const ProjectsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4rem;

  header {
    position: relative;
    top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        width: 40vw;

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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 2vmax);

  ul {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 0.8rem;

    max-width: calc(100% - 2vmax);

    list-style: none;
    padding: 0;
    margin: 0;

    li {
      flex: 1;
      display: flex;
      flex-grow: 1;
    }
  }
`;
