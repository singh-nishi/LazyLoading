import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "../login/login.component";

const LOGIN_ROUTER: Routes = [
  { 
      path: '',
      component: LoginComponent
  }
];

export const LoginRouterModule = RouterModule.forChild(LOGIN_ROUTER);
