import styled from "styled-components";
import { BorderDiv } from "../../../shared/components/BorderDiv/BorderDiv";

export const ProjectStyle = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;

  background: var(--background);
  position: relative;
  padding: 4rem 4rem 2rem;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  > aside {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 2rem;

    > header {
      top: -4rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      > h1 {
        color: var(--title);
        font-size: 2.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TagListStyle = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 0.5rem;

    li {
      padding: 0rem 0.5rem;
      border-radius: 0.25rem;
      font-weight: bold;
      color: var(--background);
      background: var(--foreground);
      border: 1px solid var(--disabled);
      opacity: 0.8;
    }
  }
`;

export const ProjectMarkdownStyle = styled(BorderDiv)`
  flex: 1;
  height: 100%;
  min-width: 40vw;
  overflow-y: auto;
  display: flex;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    display: block;
    height: 2rem;
    width: 100%;
  }

  img {
    max-width: 100%;
    border-radius: 0.25rem;
  }

  p {
    text-indent: 1rem;

    > img {
      margin-left: -1rem;
    }
  }

  a {
    color: var(--secondary);
  }

  ul,
  ol {
    padding-left: 1.5rem;
    line-height: 1.5rem;
  }

  h1,
  h2,
  h3 {
    line-height: 3.5rem;
  }

  code {
    padding: 0rem 0.5rem;
    border-radius: 0.25rem;
    font-weight: bold;
    color: var(--background);
    background: var(--foreground);
    border: 1px solid var(--disabled);
    opacity: 0.8;
  }
`;

export const ProjectLinkStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: normal;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    outline: none;

    transition: background 0.6s ease, outline 0.6s ease;

    &.online {
      background: var(--success);
      color: var(--background);
      &:hover,
      &:focus {
        outline: solid 0.25rem var(--disabled);
      }
    }

    &:not(.online) {
      color: var(--foreground);
      &:hover,
      &:focus {
        background: var(--secondary);
        color: var(--background);
      }
    }
  }
`;

export const SimilarStyle = styled.div`
  max-width: 36rem;
  position: relative;
  display: flex;
  justify-self: flex-end;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  &::before {
    content: "";
    display: flex;
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 1rem;
    height: calc(7rem + 10vmin);
    width: 4rem;
    background: linear-gradient(to right, var(--background) 0%, #0000 100%);
  }

  &::after {
    content: "";
    display: flex;
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 1rem;
    height: calc(7rem + 10vmin);
    width: 4rem;
    background: linear-gradient(to left, var(--background) 0%, #0000 100%);
  }

  > ul {
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;
    overflow-x: auto;
    text-align: left;
    list-style: none;
    min-height: calc(6rem + 10vmin);    

    > li {
      flex: 1;
      display: flex;
      align-items: center;
      list-style: none;
      min-width: calc(16rem + 10vmin);
      max-width: calc(16rem + 10vmin);
      min-height: calc(6rem + 10vmin);

      > div {
        flex: 1;
        min-height: calc(4rem + 10vmin);
      }
    }
  }
`;
