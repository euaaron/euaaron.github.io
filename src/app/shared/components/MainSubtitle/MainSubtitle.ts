import styled from "styled-components";

interface IMainSubtitleProps {
  background?: string;
  color?: string;
}

export const MainSubtitle = styled.h2<IMainSubtitleProps>`
  display: block;
  background: ${(props) => props.background || "var(--primary)"};
  color: ${(props) => props.color || "var(--background)"};
  padding: 0.1rem 2rem;
  font-size: 1rem;
  letter-spacing: normal;
`;
