import styled from "styled-components";

export const NotFoundPage = styled.div`  
  width: 100%;
  position: relative;
  height: calc(100vh - 5.05rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;  

  header {
    display: flex;
    align-items: center;
    gap: 1rem;

    > svg {
      color: var(--danger);
      height: calc(20rem - 10%);
      width: calc(20rem - 10%);
    }

    aside {
      display: flex;
      flex-direction: column;

      p {
        font-size: calc(0.5rem + 2vmin);
        font-weight: medium;
      }

      h1 {
        color: var(--title);
        font-weight: bold;
        font-size: calc(1.5rem + 2vmin);
      }

      a {
        align-self: flex-end;
        position: relative;
        top: 1rem;
      }
    }

    @media (max-width: 1366px) {
      > svg {
        height: calc(20rem - 20%);
        width: calc(20rem - 20%);
      }
    }

    @media (max-width: 960px) {
      flex-direction: column;
      text-align: center;

      > svg {
        height: 32vw;
        width: 32vw;
      }

      aside {
        gap: 0.5rem;
        align-items: center;

        a {
          align-self: center;
          padding: 0.5rem 1.5rem 0.5rem 1rem;
        }
      }
    }
  }
`;
