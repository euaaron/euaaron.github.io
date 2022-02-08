import styled from "styled-components";

export const BorderDiv = styled.div`
  border: 1px solid var(--disabled);
  border-radius: 0.5rem;
  backdrop-filter: blur(1.5rem);  

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--background);
    filter: brightness(0.8);
    backdrop-filter: blur(1.5rem);

    opacity: 0.5;
  }
`;
