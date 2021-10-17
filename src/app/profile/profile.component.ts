import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Repository } from '../repository';
import { UserService } from '../git-service.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class ProfileComponent implements OnInit {
  Users!: User;
  Repos: Repository[] = [];
  constructor(public userHttpService: UserService) { }

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
