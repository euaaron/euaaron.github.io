import styled from "styled-components";

export const AcademicContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem 4rem;
  height: calc(100%);
  width: 100%;

  @media (max-width: 1280px) {
    padding: 4rem 1rem;
  }

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 1rem;
    list-style: none;

    @media (min-width: 1367px) {
      max-width: 80vw;
    }

    > li {
      flex: 1;

      min-width: 40vw;
      @media (max-width: 900px) {
        min-width: 90vw;
      }

      @media (min-width: 1367px) {
        min-width: 32vw;
      }

      > div {
        flex: 1;
      }
      justify-content: center;
    }
  }
`;
