import { Injectable } from "@angular/core";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { differenceInYears } from 'date-fns';
import { IProfile } from "../interfaces/IProfile";

@Injectable()
export class ProfileService {
  private name = 'Aaron Stiebler';
  private birthday: Date = new Date(1996, 7, 18);
  private age = differenceInYears(new Date, this.birthday);
  private college = [
    {
      abbr: 'IFSEMG',
      name: 'Instituto Federal de Educação, Ciência e Técnologia do Sudeste de Minas Gerais - Campus Juiz de Fora',
      course: 'Bacharelado em Sistemas de Informação',
      ingressYear: 2018,
      graduationYear: 2018 + 4
    },
    {
      abbr: 'FIVJ',
      name: 'Faculdades Integradas Vianna Júnior',
      course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      ingressYear: 2021,
      graduationYear: 2021 + 2
    }
  ];
  private social = [
    {
      platform: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://linkedin.com/in/euaaron'
    }
    ,
    {
      platform: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/euaaron'
    },
    {
      platform: 'Rocketseat',
      icon: faRocket,
      url: 'https://app.rocketseat.com.br/me/aaron'
    }
  ];

  getProfileData(username: string): IProfile {
    return {
      user: {
        name: this.name,
        age: this.age,
      },
      education: this.college,
      social: this.social
    }
  }
}
