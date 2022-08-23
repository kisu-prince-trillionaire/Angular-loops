import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentsComponent } from './my-components/my-components.component';
import { MyAngularComponent } from './my-angular/my-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentsComponent,
    MyAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
