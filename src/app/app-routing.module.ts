import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { Component } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { CardFormComponent } from './components/card/card-form/card-form.component';

const routes: Routes = [
  {path:'products',component:CardComponent},
  {path:'Slider',component:SliderComponent},
  {path: 'form/:id/edit',component:CardFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
