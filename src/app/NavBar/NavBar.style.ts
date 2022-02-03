import styled from "styled-components";

interface NavBarItemProps {
  isActive: boolean;
}

export const NavBarContainer = styled.nav`
  z-index: 1;
  position: fixed;
  background: var(--background);
  width: 100%;

  div {
    display: flex;
    align-items: center;
    padding: 1rem 2rem 1rem 1.25rem;

    > button {
      color: ${({ theme }) =>
        theme.type === "light" ? "var(--secondary)" : "var(--primary)"};
    }

    > ul {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      list-style: none;
      gap: 1rem;
    }
  }
`;

export const NavBarItem = styled.li<NavBarItemProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before,
  &:last-child::after {
    content: "";
    display: block;
    width: 2rem;
    height: 0.25rem;
    border-radius: 0.25rem;
    background: var(--foreground);
  }

  a {
    color: ${({ isActive, theme }) =>
      isActive
        ? theme.type === "light"
          ? "var(--primary)"
          : "var(--secondary)"
        : "var(--foreground)"};
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
  }
`;
