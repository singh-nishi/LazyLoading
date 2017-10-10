import { NgModule } from '@angular/core';

import {LoginRouterModule  } from '../login/login-routing.module';
import {LoginComponent} from '../login/login.component';

@NgModule({
  imports: [LoginRouterModule],
  declarations: [LoginComponent]
})
export class LoginModule { }
