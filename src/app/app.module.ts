import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ButtonDescriptionComponent } from './button-description/button-description.component';
import { InputComponent } from './input/input.component';
import { PanelComponent } from './panel/panel.component';
import { ButtontypeComponent } from './buttontype/buttontype.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ButtonDescriptionComponent,
    InputComponent,
    PanelComponent,
    ButtontypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
