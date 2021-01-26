import { Component, OnInit } from '@angular/core';
import { ptBR } from 'date-fns/locale';

import { IRepos } from '../../interfaces/IRepos';

import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

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
