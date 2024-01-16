import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ProfileRoutingModule} from "./pages/profile/profile-routing.module";
import {HeaderModule} from "./custom-modules/header/header.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./pages/auth/auth.component";

@NgModule({
  declarations: [
      AppComponent,
      AuthComponent
  ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ProfileRoutingModule,
        HeaderModule,
        HttpClientModule
    ],
  providers: [
      {
          provide: RouteReuseStrategy,
          useClass: IonicRouteStrategy
      }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
