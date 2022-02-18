import styled from "styled-components";

export const BreadcrumbStyle = styled.nav`
  display: flex;
  place-self: flex-start;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      list-style: none;

      a {
        text-decoration: none;
        text-transform: capitalize;

        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }

      &:not(:last-child) {
        text-transform: capitalize;
        a {
          color: var(--foreground);
        }
      }

      &:last-child {
        a {
          color: var(--secondary);
          font-weight: bold;
        }
      }
    }
  }
`;