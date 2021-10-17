

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'userprofile', component: ProfileComponent },
  { path: 'repositories', component: RepositoryComponent },
  { path: '', redirectTo: "/userprofile", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
