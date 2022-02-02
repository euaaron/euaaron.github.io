import styled from "styled-components";

export const BorderDiv = styled.div`
  border: 1px solid var(--disabled);
  border-radius: 0.5rem;
  background: var(--background);
  filter: ${(props) =>
    props.theme.type === "dark" ? "brightness(0.8)" : "brightness(1.2)"};
`;
