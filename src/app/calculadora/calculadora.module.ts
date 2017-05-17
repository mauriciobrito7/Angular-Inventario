import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorPricePipe } from './../pipes/calculator-price.pipe';
import { CalculatorEarnPipe } from './../pipes/calculator-earn.pipe';


const routes: Routes = [
  {
    path:'', component:CalculadoraComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CalculadoraComponent,
    CalculatorPricePipe,
    CalculatorEarnPipe
    ]
})
export class CalculadoraModule { }
