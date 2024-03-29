import styled from "styled-components";
import { SidedHeader } from "../shared/components/SidedContainer/SidedContainer.style";

export const SkillsContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  height: calc(100%);

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

    @media (max-width: 1280px) {
      flex-direction: column;
    }
  }
`;

export const SkillsHeader = styled(SidedHeader)`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 40%;

  @media (max-width: 1280px) {
    flex: 1;
  }
`;

export const SkillsBox = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space;
  overflow: auto;

  > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    overflow: auto;

    list-style: none;
    padding: 2rem 0;
    margin: 0;

    > li {
      position: relative;

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

interface ISkillTooltipProps {
  posX: number;
}

export const SkillTooltip = styled.span<ISkillTooltipProps>`
  z-index: 2;
  display: none;
  position: absolute;
  bottom: -1.75rem;
  ${({posX}) => posX >= 7 ? "right: 0;" : `left: calc((${posX}rem * 2) + (${posX} * 2px) - 2rem);`};

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
    top: -0.24rem;
    height: 0.5rem;
    ${({posX}) => posX >= 7 ? `right: calc((${10 - posX}rem * 2) - (${10 - posX} * 1px) + 2px);` : "left: calc(2rem - 4px);"};
    width: 0.5rem;

    background: var(--foreground);
    transform: rotate(45deg);
  }
`;
