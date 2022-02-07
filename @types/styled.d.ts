import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id: number,
    name: string;
    type: "light" | "dark";
    default?: boolean;
    colors: {
      primary: string;
      secondary: string;
      title: string;
      foreground: string;
      background: string;
      success: string;
      warning: string;
      danger: string;
      disabled: string;
      gradient: string;
    };
  }
}
