import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SportAppComponent } from './sport-app/sport-app.component';
import { SportNavigationComponent } from './sport-app/sport-navigation/sport-navigation.component';
import { SportLoginComponent } from './sport-app/sport-login/sport-login.component';

@NgModule({
  declarations: [
    AppComponent,
    SportAppComponent,
    SportNavigationComponent,
    SportLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
