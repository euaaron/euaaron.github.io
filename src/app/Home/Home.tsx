import React from "react";
import { HomeContainer, HomeTitle, SocialContainer } from "./Home.style";
import {
  ISocialMedia,
  SocialMediaProvider
} from "./services/SocialMediaProvider";

type HomeState = {
  socialMedia: ISocialMedia[];
};

export class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      socialMedia: [],
    };
  }

  componentDidMount() {
    SocialMediaProvider.getInstance()
      .getAll()
      .then((socialMedia) => {
        this.setState({
          socialMedia,
        });
      });
  }

  render(): React.ReactNode {
    const { socialMedia } = this.state;
    return (
      <>
        <HomeContainer>
          <HomeTitle>
            <h1>Aaron Carneiro</h1>
            <small>
              <b>Desenvolvedor</b> Generalista
            </small>
          </HomeTitle>
          {socialMedia.length > 0 && (
            <SocialContainer>
              <ul>
                {socialMedia.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      title={item.title}
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </SocialContainer>
          )}
        </HomeContainer>
      </>
    );
  }
}
