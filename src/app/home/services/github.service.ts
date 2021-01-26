import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRepos } from "../interfaces/IRepos";
import { IUser } from "../interfaces/IUser";

@Injectable()
export class GithubService {

  private apiUrl: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<IUser> {
    return this.http.get<IUser>(this.apiUrl + username);
  }

  getRepos(username: string): Observable<IRepos[]> {
    return this.http.get<IRepos[]>(this.apiUrl + username + "/repos");
  }

  getTags(tags_url: string): Observable<string[]> {
    return this.http.get<string[]>(tags_url);
  }
}
