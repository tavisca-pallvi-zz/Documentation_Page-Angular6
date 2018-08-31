import { NgModule } from '@angular/core';
import { ButtonDescriptionComponent } from '../button-description/button-description.component';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { PanelComponent } from '../panel/panel.component';
import { InputComponent } from '../input/input.component';
const routes: Routes = [
  //{
  //  path: '',
  //  component: ,
  //},

  {
    path: 'button',
    component: ButtonDescriptionComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'panel',
    component: PanelComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  
  declarations: []
})
export class AppRoutingModule { }
