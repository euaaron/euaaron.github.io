import styled from "styled-components";
import {
  SidedBox,
  SidedContainer,
  SidedHeader
} from "../shared/components/SidedContainer/SidedContainer.style";

export const SkillsContainer = styled(SidedContainer)`
  display: flex;
  flex-direction: row;
  max-height: fit-content;

  @media (max-width: 900px) {
    flex-direction: column;
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

export const SkillsBox = styled(SidedBox)`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  overflow: auto;

  @media (max-width: 900px) {
    flex: 4;
    justify-content: flex-start;
    align-items: flex-start;
  }

  > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;

    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
