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
    gradient: "linear-gradient(45deg, #ca5959 0%, #5475db 50%, #5475db 100%)"
  },
};

export const LightTheme: DefaultTheme = {
  id: 1,
  name: "System Light",
  type: "light",
  colors: {
    primary: "#50BBF6",
    secondary: "#BD93F9",
    title: "#FDFDFF",
    foreground: "#22222f",
    background: "#6265A4",
    success: "#7FEC8A",
    warning: "#F6B450",
    danger: "#E95A5A",
    disabled: "#9EB2CF",
    gradient: "linear-gradient(45deg, #282A36 20%, #4625bb 45%, #4625bb 100%)"
  },
};
