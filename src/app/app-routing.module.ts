import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
  {
      path: 'login',
      loadChildren: 'app/components/login/login.module#LoginModule'
  }
];

export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(router);
