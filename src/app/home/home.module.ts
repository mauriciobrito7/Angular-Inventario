import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { InventarioComponent } from './inventario/inventario.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
  },

  {
    path:'*', component:HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [HomeComponent, InventarioComponent,],
  providers:[]
})
export class HomeModule { }
