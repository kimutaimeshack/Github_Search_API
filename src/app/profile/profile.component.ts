import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Repository } from '../repository';
import { GitService } from'../git-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
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
