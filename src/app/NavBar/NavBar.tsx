import React from "react";
import { Link } from "react-router-dom";
import { NavBarContainer, NavBarItem } from "./NavBar.style";

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

interface NavBarProps {
  children?: React.ReactNode;
}

export class NavBar extends React.Component<NavBarProps, NavigationState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      currentPage: "",
      lastPage: "",
      pages: [
        { name: "Início", path: "/", isActive: false },
        { name: "Projetos", path: "/projects", isActive: false },
        { name: "Sobre", path: "/about", isActive: false },
      ],
    };
    this.handleActivePage();
  }

  handleActivePage() {
    const { pages } = this.state;
    const currentPage = window.location.pathname;
    const lastPage =
      this.state.lastPage === "" ? currentPage : this.state.lastPage;
    const newPages = pages.map((page) => {
      if (page.path === currentPage) {
        page.isActive = true;
      } else {
        page.isActive = false;
      }
      return page;
    });
    this.setState({ pages: newPages });
    this.setState({ lastPage });
  }

  handleLastPage() {
    this.setState({ lastPage: window.location.pathname });
  }

  handleNavigation() {
    this.handleActivePage();
    this.handleLastPage();
  }

  render(): React.ReactNode {
    return (
      <NavBarContainer>
        {this.props.children}
        <ul>
          {this.state.pages.map((page) => (
            <NavBarItem
              key={page.name}
              isActive={page.isActive}
              onClick={() => this.handleNavigation()}
            >
              <Link to={page.path}>{page.name}</Link>
            </NavBarItem>
          ))}
        </ul>
      </NavBarContainer>
    );
  }
}
