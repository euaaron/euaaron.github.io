import { ReactNode } from "react";
import { FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import { ReactComponent as Rocketseat } from "../../shared/assets/icons/rocket.svg";

export interface ISocialMedia {
  name: string;
  url: string;
  title: string;
  icon: ReactNode;
}

export class SocialMediaProvider {
  private static instance: SocialMediaProvider = new SocialMediaProvider();
  private socialMedia: Promise<ISocialMedia[]>;

  private constructor() {
    this.socialMedia = this.getAll();
  }

  public static getInstance(): SocialMediaProvider {
    return SocialMediaProvider.instance;
  }

  public getUpdates(): Promise<ISocialMedia[]> {
    return SocialMediaProvider.getInstance().getAll();
  }

  public getAll(): Promise<ISocialMedia[]> {
    return new Promise((resolve) => {
      resolve([
        {
          name: "mail",
          url: "mailto:hello@aaroncarneiro.com",
          title: "Email",
          icon: <FiMail />,
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/aaron-carneiro/",
          title: "LinkedIn",
          icon: <FiLinkedin />,
        },
        {
          name: "github",
          url: "https://github.com/euaaron",
          title: "GitHub",
          icon: <FiGithub />,
        },
        {
          name: "youtube",
          url: "https://www.youtube.com/user/relbeits",
          title: "YouTube",
          icon: <FiYoutube />,
        },
        {
          name: "rocketseat",
          url: "https://app.rocketseat.com.br/me/aaron",
          title: "Rocketseat",
          icon: <Rocketseat />,
        },
      ]);
    });
  }
}
