import styled from "styled-components";
import { BorderDiv } from "../shared/components/BorderDiv/BorderDiv";
import { SidedHeader } from "../shared/components/SidedContainer/SidedContainer.style";

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  min-height: calc(100vh - 5.1rem);

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    max-width: 1920px;
    gap: 2.5rem;

    > span {
      color: var(--primary);
    }

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
`;

export const SkillsHeader = styled(SidedHeader)`
  flex: 2;
  display: flex;
  flex-direction: column;
  max-width: 40%;

  @media (max-width: 900px) {
    flex: 0;
  }
`;

export const SkillsBox = styled(BorderDiv)`
  overflow: hidden;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space;
  padding: 2.5rem 2.5rem;

  > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    list-style: none;
    padding: 0;
    margin: 0;

    > li {
      position: relative;
      > span {
        z-index: 2;
        display: none;
        position: absolute;
        top: -1.75rem;
        right: 0;

        font-weight: bold;
        color: var(--background);
        background: var(--foreground);
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;

        &::before {
          content: "";
          z-index: -1;
          display: block;
          position: absolute;
          bottom: -0.24rem;
          height: 0.5rem;
          left: 0.75rem;
          width: 0.5rem;

          background: var(--foreground);
          transform: rotate(45deg);
        }
      }

      &:hover,
      &:focus,
      &:focus-within {
        > span {
          display: block;
        }
      }
    }
  }
`;
