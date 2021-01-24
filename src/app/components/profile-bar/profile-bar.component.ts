import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { differenceInYears } from 'date-fns';

@Component({
  selector: 'profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.scss']
})

export class ProfileBar {
  name = 'Aaron Stiebler';
  birthday: Date = new Date(1996, 7, 18);
  age = differenceInYears(new Date, this.birthday);

  college = {
    abbr: 'IFSEMG',
    name: 'Instituto Federal de Educação, Ciência e Técnologia do Sudeste de Minas Gerais - Campus Juiz de Fora',
    course: 'Bacharelado em Sistemas de Informação',
    ingressYear: 2018,
    graduationYear: 2018 + 4
  };
  social = [
    {
      icon: faLinkedin,
      url: 'https://linkedin.com/in/euaaron'
    }
    ,
    {
      icon: faGithub,
      url: 'https://github.com/euaaron'
    },
    {
      icon: faRocket,
      url: 'https://app.rocketseat.com.br/me/aaron'
    }
  ]

}
