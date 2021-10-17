
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root',
})
export class GitService{
  Users!: User;
  Repos: Repository[] = [];

  constructor(private http: HttpClient) { }
  searchGits(searchTerm: string) {
    interface userInterface {
      login: string;
      followers: any;
      following: any;
      public_repos: any;
      avatar_url: any;
      location: any;
    }
    let urlUser = 'https://api.github.com/users/' + searchTerm;

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<userInterface>(urlUser)
        .toPromise()
        .then(
          (result) => {
            this.Users = result;
            console.log(this.Users);

            resolve(result);
          },
          (error) => {
            console.log();
            reject();
          }
        );
    });
    return promise;
  }
  searchRepos(searchTerm: string) {
    interface repoInterface {
      name: string;
      description: string;
      created_at: Date;
      html_url:string;
    }

    let urlUser = 'https://api.github.com/users/' + searchTerm + '/repos';

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<repoInterface[]>(urlUser)
        .toPromise()
        .then(
          (results) => {
            this.Repos = [];
            for (let i = 0; i < results.length; i++) {
              let repo = new Repository(
                results[i].name,
                results[i].description,
                results[i].created_at,
                results[i].html_url
              );
              this.Repos.push(repo);
            }
            console.log(results);
            resolve(results);
          },
          (error) => {
            console.log();
            reject();
          }
        );
    });
    return promise;
  }
}
