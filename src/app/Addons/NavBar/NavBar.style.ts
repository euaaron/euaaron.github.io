import styled from "styled-components";

interface NavBarItemProps {
  isActive: boolean;
}

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 20;
  width: 100%;
  top: 0;
  padding: 1rem 2rem 1rem 1.25rem;
  max-height: 3.5rem;

  background: var(--background);

  transition: background 0.4s ease-in-out, color 0.4s ease-in-out;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    > button {
      color: var(--primary);
    }
  }

  > aside {
    display: flex;
    align-items: center;

    > ul {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      list-style: none;
    }
  }

  button.toggleMenu {
    display: none;
  }

  @media (max-width: 768px) {
    button.toggleMenu {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--foreground);
    }

    > aside {
      display: none;
      top: 0;
      right: 0;
      position: absolute;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      min-width: fit-content;
      border-left: 1px solid var(--disabled);
      backdrop-filter: blur(1rem);

      button.toggleMenu {
        top: 0;
        right: 0;
        position: fixed;
        align-self: flex-end;
        padding: 1rem 1.25rem;

        > svg {
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      > ul {
        flex: 1;
        max-width: 90%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 0 4rem 0 4rem;

        gap: 1.25rem;
      }

      &.active {
        display: flex;
      }
    }
  }
`;

export const NavBarItem = styled.li<NavBarItemProps>`
  display: flex;

  &::before,
  &:last-child::after {
    content: "";
    display: block;
    position: relative;
    top: 1rem;
    width: 2rem;
    height: 0.25rem;
    border-radius: 0.25rem;
    background: var(--foreground);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    color: ${({ isActive }) =>
      isActive ? "var(--primary)" : "var(--foreground)"};
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    outline: 0.25rem solid transparent;
    transition: filter 0.4s ease-in-out, background 0.4s ease-in-out;

    &::after {
      content: "";
      display: block;
      width: ${({ isActive }) => (isActive ? "0.75rem" : "0")};
      height: 0.5rem;
      border-radius: 0.5rem;
      transition: all 0.6s ease-in-out;
      background: ${({ isActive }) =>
        isActive ? "var(--primary)" : "transparent"};
    }

    &:focus {
      outline: 0.25rem solid var(--disabled);
    }

    &:hover,
    &:focus {
      background: var(--background);

      &::after {
        content: "";
        display: block;
        width: 1.5rem;
        height: 0.5rem;
        background: var(--primary);
      }
    }
  }

  @media (max-width: 768px) {
    &::before,
    &:last-child::after {
      display: none;
    }

    a {
      font-size: 1.75rem;
      font-weight: normal;
      flex-direction: row-reverse;
      gap: 2rem;

      &:after {
        height: ${({ isActive }) => (isActive ? "0.75rem" : "0")};
        width: 0.5rem;
      }

      &:hover,
      &:focus {
        background: transparent;

        &::after {
          height: 1.5rem;
          width: 0.5rem;
        }
      }
    }
  }
`;
