import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', component:CalculadoraComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
        RouterModule.forChild(routes)
  ],
  declarations: [CalculadoraComponent]
})
export class CalculadoraModule { }
