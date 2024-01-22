import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProfileRoutingModule} from "./pages/profile/profile-routing.module";
import {HeaderModule} from "./custom-modules/header/header.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./pages/auth/auth.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MARKET_KEY_TOKEN} from "./custom-modules/auth/tokens/market-key.token";
import {BehaviorSubject} from "rxjs";
import {AuthInterceptor} from "./custom-modules/auth/interceptors/market-key-header.interceptor";
import {USER_INFO_TOKEN} from "./custom-modules/auth/tokens/user-info.token";
import {SUCCESS_TOKEN_VISIBILITY_TOKEN} from "./custom-modules/success-modal/tokens/success-modal-visibility.token";
import {ERROR_TOKEN_VISIBILITY_TOKEN} from "./custom-modules/error-modal/tokens/error-modal-visibility.token";

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
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        {
            provide: MARKET_KEY_TOKEN,
            useValue: new BehaviorSubject(null)
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: USER_INFO_TOKEN,
            useValue: new BehaviorSubject(null)
        },
        {
            provide: SUCCESS_TOKEN_VISIBILITY_TOKEN,
            useValue: new BehaviorSubject(false)
        },
        {
            provide: ERROR_TOKEN_VISIBILITY_TOKEN,
            useValue: new BehaviorSubject(false)
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
