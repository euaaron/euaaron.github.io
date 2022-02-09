import styled from "styled-components";
import { BorderDiv } from "../shared/components/BorderDiv/BorderDiv";
import { SidedHeader } from "../shared/components/SidedContainer/SidedContainer.style";

export const AboutContainer = styled.section`
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
    flex-direction: row-reverse;
    max-width: 1920px;
    gap: 2.5rem;

    span {
      color: var(--primary);
    }

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
`;

export const AboutHeader = styled(SidedHeader)`
  flex: 2;
  display: flex;
  flex-direction: column;
  max-width: 40%;

  @media (max-width: 900px) {
    flex: 0;
  }
`;

export const AboutBox = styled(BorderDiv)`
  overflow: hidden;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space;
  align-items: center;
  gap: 1rem;

  text-indent: 2rem;  
  padding: 2.5rem 2.5rem;
`;
