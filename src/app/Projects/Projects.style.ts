import styled from "styled-components";

export const ProjectsContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem 1rem;
  text-align: center;

  
  > header {    
    position: static;
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
    }
  }
`;

export const ProjectsList = styled.ul`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  height: 100%;
  overflow: auto;
  list-style: none;
  padding: 2rem 0 4rem;
  position: relative;
  top: 0;

  li {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    min-width: calc(24rem - 2%);
    max-width: calc(24rem - 2%);
    min-height: calc(13rem - 2%);
    max-height: calc(13rem - 2%);
  }
`;
