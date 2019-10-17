import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
