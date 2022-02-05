import styled from "styled-components";

interface LiveContainerProps {
  isVisible: boolean;
}

export const LiveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: var(--danger);
  border-radius: .5rem;
  color: var(--background);
  font-weight: bold;
  padding: 0.5rem 1rem;
  position: sticky;
  bottom: calc(50vh);
  left: 2rem;
  outline: 0.25rem solid transparent;

  transition: filter 0.4s ease-in-out, outline 0.4s ease-in-out;

  &:hover,
  &:focus {
    outline: 0.25rem solid var(--disabled);
    filter: brightness(1.2);
  }
`;

export const LiveContainer = styled.div<LiveContainerProps>`
  z-index: 200;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  top: 4rem;
  position: -webkit-sticky;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  resize: both;
  border: 1px solid var(--disabled);
  min-width: calc(16rem * 1.5);
  min-height: calc(9rem * 1.5);

  > iframe {
    flex: 1;
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
