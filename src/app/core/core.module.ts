import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';



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
    RouterModule.forRoot(routes)
  ],
  declarations: [ShellComponent, TopBarComponent, MainContentComponent],
  exports: [ShellComponent]
})
export class CoreModule { }
