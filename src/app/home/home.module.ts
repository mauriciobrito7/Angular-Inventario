import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'*', component:HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, InventarioComponent]
})
export class HomeModule { }
