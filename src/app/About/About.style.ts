import styled from "styled-components";
import { BorderDiv } from "../shared/components/BorderDiv/BorderDiv";
import { SidedHeader } from "../shared/components/SidedContainer/SidedContainer.style";

export const AboutContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  width: 100%;
  height: calc(100%);

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    max-width: 1920px;
    gap: 4rem;

    span {
      color: var(--secondary);      
    }
  }
  @media (max-width: 900px) {
    min-height: 0;    

    > div {
      flex-direction: column;
      justify-content: space-between;
      gap: 8rem;
    }
  }
`;

export const AboutHeader = styled(SidedHeader)`
  flex: 2;
  display: flex;
  flex-direction: column;
  max-width: 40%;

  @media (max-width: 900px) {
    max-width: 80%;    
  }
`;

export const AboutBox = styled(BorderDiv)`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  gap: 1rem;
  
  overflow: hidden;
  max-width: 1280px;
  text-indent: 2rem;
  padding: 2.5rem 2.5rem;
`;
