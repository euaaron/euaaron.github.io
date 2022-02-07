import styled from "styled-components";

export const ProjectsContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  max-width: 100vw;
  min-height: 100vh;
  padding: 2rem 1rem 4rem;
  text-align: center;
`;

export const SearchProject = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
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

  > input {
    flex: 1;
    height: 1.5rem;
    width: calc(20vw + 12rem);

    background: transparent;
    border: none;
    outline: none;
    color: var(--foreground);
    font-size: 1.25rem;
  }

  > span {
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    color: var(--foreground);
    cursor: pointer;
    transition: filter 0.4s ease-in-out;

    &:hover,
    &:focus {
      background: var(--background);
      filter: brightness(1.2);
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const ProjectsList = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  gap: 1.5rem;
  
  > ul {
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    align-self: center;
    justify-content: center;
    gap: 0.5rem;

    list-style: none;

    > li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      min-width: calc(16rem + 10vmin);
      max-width: calc(16rem + 10vmin);
      min-height: calc(6rem + 10vmin);

      @media (max-width: 768px) {
        max-width: 90vw;
      }
    }
  }
`;

export const ErrorContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > i {
    font-size: calc(12rem - 2%);
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.5rem 1rem;
    outline: 0.25rem solid transparent;
    border-radius: 0.5rem;

    color: var(--background);
    font-weight: normal;
    font-size: 1.2rem;
    background: var(--secondary);

    transition: filter 0.4s ease-in-out, outline 0.4s ease-in-out;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    &:hover,
    &:focus {
      filter: brightness(1.2);
      outline: 0.25rem solid var(--disabled);
    }
  }
`;
