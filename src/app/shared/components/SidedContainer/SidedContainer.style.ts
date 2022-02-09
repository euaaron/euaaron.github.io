import styled from "styled-components";
import { BorderDiv } from "../BorderDiv/BorderDiv";

interface ISidedProps {
  reverse?: boolean;
}

export const SidedContainer = styled.section<ISidedProps>`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  align-items: center;
  justify-content: center;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
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

export const SidedBox = styled(BorderDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  min-height: 50%;
  text-indent: 2rem;
  text-align: justify;
  padding: 2.5rem 2.5rem;
`;

export const SidedHeader = styled.header`
  display: flex;
  min-width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4rem;
`;
