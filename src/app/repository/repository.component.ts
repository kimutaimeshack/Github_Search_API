


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { GitService } from '../git-service.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [GitService],
  styleUrls: ['./repository.component.css'],
})
export class RepositoriesComponent implements OnInit {
  Users!: User;
  Repos: Repository[] = [];
  constructor(public userHttpService: GitService) { }

  ngOnInit() {
    this.searchGit('kimutaimeshack');
  }
  searchGit(searchTerm: string) {
    this.userHttpService.searchGits(searchTerm).then(
      (success) => {
        this.Users = this.userHttpService.Users;
      },
      (error) => {
        console.log(error);
      }
    );
    this.userHttpService.searchRepos(searchTerm).then((success) => {
      this.Repos = this.userHttpService.Repos;
    });
  }
}

