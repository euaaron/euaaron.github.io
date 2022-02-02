import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  id: 0,
  name: "System Dark",
  type: "dark",
  colors: {
    primary: "#50BBF6",
    secondary: "#BD93F9",
    title: "#DFE9F5",
    foreground: "#96BCF4",
    background: "#202034",
    success: "#7FEC8A",
    warning: "#F6B450",
    danger: "#E95A5A",
    disabled: "#9EB2CF",
  },
};

export const LightTheme: DefaultTheme = {
  id: 1,
  name: "System Light",
  type: "light",
  colors: {
    primary: "#50BBF6",
    secondary: "#BD93F9",
    title: "#202034",
    foreground: "#6272A4",
    background: "#DFE9F5",
    success: "#7FEC8A",
    warning: "#F6B450",
    danger: "#E95A5A",
    disabled: "#9EB2CF",
  },
};
