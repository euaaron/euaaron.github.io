import styled from "styled-components";

interface NavBarItemProps {
  isActive: boolean;
}

export const NavBarContainer = styled.nav`  
  width: 100%;  
  z-index: 20;
  position: sticky;
  top: 0;
  background: var(--background);  
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out;

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
    }
  }
`;

export const NavBarItem = styled.li<NavBarItemProps>`
  display: flex;
  align-items: center;  

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
    padding: 0.25rem 0.75rem;
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
