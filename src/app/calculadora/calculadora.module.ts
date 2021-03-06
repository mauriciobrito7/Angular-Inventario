import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorEarnForPricePipe } from './../pipes/calculator-earn-for-price.pipe';
import { CalculatorEarnPipe } from './../pipes/calculator-earn.pipe';
import { CalculatorPricePipe } from './../pipes/calculator-price.pipe';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

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
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CalculadoraComponent,
    CalculatorEarnPipe,
    CalculatorEarnForPricePipe,
    CalculatorPricePipe
    ]
})
export class CalculadoraModule { }
