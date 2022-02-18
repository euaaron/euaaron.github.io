import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;

  width: 100%;
  height: calc(100%);
  padding: 1rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 98vw;
    height: 100%;

    background: url('https://github.com/euaaron.png') no-repeat;
    background-color: #000;
    background-position: center bottom;
    background-size: 90vmin;
    ${({ theme }) =>
      theme.type === "light" &&
      "border-radius: 35vmin; width: 90vmin; height: 90vmin; left: calc(50% - 45vmin); background-position: center center;"}
    mix-blend-mode: ${({ theme }) =>
      theme.type === "light" ? "normal" : "lighten"};
    z-index: -1;

    transition: background 0.4s ease-in-out;

    @media (max-width: 768px) {
      background-size: 60vmax;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 1.75rem;
    height: calc(100vh - 4rem);
  }
`;

export const HomeTitle = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  > h1 {
    display: flex;
    flex-direction: column;
    background: var(--gradient);
    -webkit-text-stroke: 0.15rem transparent;
    -webkit-background-clip: text;
    font-weight: bold;
    background-clip: text;
    color: var(--background);
  }

  > small {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--title);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 6rem;
    place-self: center;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  > ul {
    list-style: none;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0.5rem;

    > li {
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        gap: 0.5rem;

        padding: 0.5rem;
        border-radius: 0.25rem;
        outline: 0.25rem solid transparent;
        transition: filter 0.4s ease-in-out, background 0.4s ease-in-out;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 0.5rem;
          transition: all 0.6s ease-in-out;
        }

        &:focus {
          outline: 0.25rem solid var(--disabled);
        }

        &:hover,
        &:focus {
          background: var(--background);
          filter: brightness(1.2);

          &::after {
            content: "";
            display: block;
            width: 1.25rem;
            height: 0.5rem;
            border-radius: 0.25rem;
            background: var(--primary);
          }
        }

        svg {
          color: var(--foreground);
          width: calc(2.5rem - 1vmin);
          height: calc(2.5rem - 1vmin);
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    > ul {
      flex-direction: column;
      > li {
        > a {
          flex-direction: row;
        }
      }
    }
  }
`;
