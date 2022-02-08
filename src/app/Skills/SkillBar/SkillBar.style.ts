import styled from "styled-components";

interface ISkillBarProps {
  length: number;
  isFilled?: boolean;
}

function getBackgroundColor(length: number) {
  if (length <= 3) {
    return "var(--warning)";
  } else if (length <= 4) {
    return "var(--primary)";
  } else if (length <= 9) {
    return "var(--success)";
  } else {
    return "var(--secondary)";
  }
}

export const SkillBarContainer = styled.div<ISkillBarProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.25rem;

  width: calc(20rem + (2px * 9));
  height: 2rem;
  text-indent: 0;

  > small.skillName {
    font-size: 1.05rem;
  }

  > div {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    overflow: hidden;
    position: relative;
    border-radius: 0.25rem;
    height: 0.5rem;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      filter: brightness(0.6);
      background: var(--background);
      height: 100%;
      width: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100%;
      width: ${({ isFilled, length }) =>
        isFilled ? `calc(${length * 2}rem + (2px * ${length - 1}))` : "0"};
      background: ${(props) => getBackgroundColor(props.length)};
      border-radius: 0.25rem;

      transition: width 0.5s ease-in-out;
    }

    > span {
      display: flex;
      position: relative;
      background: var(--background);
      width: 2px;
      height: 100%;

      &:first-of-type {
        margin-left: 2rem;
      }
    }
  }
`;
