import { Rnd } from "react-rnd";
import styled from "styled-components";

interface LiveContainerProps extends Rnd {
  isVisible: boolean;  
}

export const LiveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  outline: 0.25rem solid transparent;
  border-radius: .5rem;
  padding: 0.25rem .75rem;  
  max-width: calc(8rem);
  background: var(--danger);
  color: var(--background) !important;
  font-weight: bold;

  transition: filter 0.4s ease-in-out, outline 0.4s ease-in-out;

  &:hover,
  &:focus {
    outline: 0.25rem solid var(--disabled);
    filter: brightness(1.2);
  }
`;

export const LiveContainer = styled(Rnd)<LiveContainerProps>`
  z-index: 200;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  top: 5.5rem;  
  position: absolute;
  border-radius: 0.5rem;
  overflow: hidden;
  resize: both;
  border: 1px solid var(--disabled);
  min-width: calc(16rem * 1.5);
  min-height: calc(9rem * 1.5);

  > iframe {
    width: 100%;
    height: 100%;
    position: relative;
    min-width: calc(16rem * 1.5);
    min-height: calc(9rem * 1.5);
  }

  > div {
    z-index: 22;
    display: flex;
    position: absolute;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    height: 20%;
    padding: 0.25rem 0.25rem;
    cursor: move;
    background: linear-gradient(
      180deg,
      rgba(32, 32, 52, 1) 0%,
      rgba(32, 32, 52, 0.8) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;

    transition: opacity 0.4s ease-in-out;

    &:hover,
    &:focus {
      opacity: 1;
    }

    button {
      padding: 0.25rem 0.5rem;
      color: var(--disabled);
      transition: color 0.4s ease-in-out;
      cursor: pointer;

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }
  }
`;
