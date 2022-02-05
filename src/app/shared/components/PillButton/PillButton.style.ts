import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyledLinkProps {
  animate: string;
  paddingfix: string;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;
  color: var(--primary);
  border-radius: 4rem;
  border: 1px solid transparent;
  padding: 0.5rem 0rem 0.5rem
    ${(props) => (props.paddingfix === "true" ? "1rem" : "1.5rem")};

  ${(props) =>
    props.animate
      ? "transition: border 0.4s ease-in-out, background 0.4s ease-in-out, padding 0.6s ease-in-out"
      : props.paddingfix === "true"
      ? "padding: 0.5rem 1.5rem 0.5rem 1rem;"
      : "padding: 0.5rem 1.5rem 0.5rem 1.5rem;"};

  &:hover,
  &:focus {
    border: 1px solid var(--primary);
    padding: 0.5rem 1.5rem 0.5rem
      ${(props) => (props.paddingfix === "true" ? "1rem" : "1.5rem")};
  }
`;
