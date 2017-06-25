import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FooterComponent } from './shell/footer/footer.component';
import { PageNotFoundComponent } from './shell/page-not-found/page-not-found.component';
import { ProductoComponent } from './../home/producto/producto.component';
import { ProductosService } from './../services/productos.service';
import { PricesService } from './../services/prices.service';
import { BackgroundDirective } from './../directives/background.directive';


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
    path:'producto/:id', component:ProductoComponent
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
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [ShellComponent, TopBarComponent, MainContentComponent, FooterComponent, PageNotFoundComponent, ProductoComponent,BackgroundDirective],
  providers:[ProductosService, PricesService],
  exports: [ShellComponent]
})
export class CoreModule { }
