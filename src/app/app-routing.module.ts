import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './LoginForm/login-page/login-page.component';
import { UserCreateFormComponent } from './LoginForm/user-create-form/user-create-form.component';
import { UserListComponent } from './LoginForm/user-list/user-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "createUser",
    component: UserCreateFormComponent
  },
  {
    path: "userList",
    component: UserListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
