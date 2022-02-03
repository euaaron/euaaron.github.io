import React from "react";

type NavigationState = {
  currentPage: string;
  lastPage: string;
  pages: Page[];
};

type Page = {
  name: string;
  path: string;
  isActive: boolean;
};

export class NavBar extends React.Component<{}, NavigationState> {

  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: "",
      lastPage: "",
      pages: [],
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>Hello</h1>
      </>
    );
  }
}
