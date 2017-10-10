import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxPopupModule, DxButtonModule, DxTemplateModule, DxTextAreaModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { ServiceModelComponent } from './components/service-model/service-model.component';
//import { RouterModule, Routes } from "@angular/router";

import { AppRouterModule } from '../app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ServiceModelComponent        
  ],
  imports: [
    BrowserModule, DxPopupModule, DxButtonModule, DxTemplateModule, DxTextAreaModule,AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
