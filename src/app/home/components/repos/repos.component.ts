import { Component, OnInit } from '@angular/core';
import { ptBR } from 'date-fns/locale';
import { faExternalLinkAlt, faFileCode, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

import { IRepos } from '../../interfaces/IRepos';

import { GithubService } from '../../services/github.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  linkIcon = faExternalLinkAlt;
  fileIcon = faFileCode;
  globeIcon = faGlobeAmericas;
  githubIcon = faGithub;

  repos: IRepos[] = [];

  repo_tags;
  options = {
    locale: ptBR
  };

  constructor(private github: GithubService) {
    this.repo_tags = github.getTags;
  }

  ngOnInit(): void {
    this.github.getRepos("euaaron").subscribe(
      repos => this.repos = repos
    );
  }

}
