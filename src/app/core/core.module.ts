import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAjh3khnudY3_L_egDbauO06yOL9mCfXbk",
    authDomain: "businessapp-e8c0b.firebaseapp.com",
    databaseURL: "https://businessapp-e8c0b.firebaseio.com",
    projectId: "businessapp-e8c0b",
    storageBucket: "businessapp-e8c0b.appspot.com",
    messagingSenderId: "672216814772"
}

const routes: Routes = [
  {
    path:'', loadChildren:'./../home/home.module#HomeModule'
  },
  {
    path:'calculadora', loadChildren:'./../calculadora/calculadora.module#CalculadoraModule'
  },
  {
    path:'**', redirectTo:''
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule
  ],
  declarations: [ShellComponent, TopBarComponent, MainContentComponent],
  exports: [ShellComponent]
})
export class CoreModule { }
