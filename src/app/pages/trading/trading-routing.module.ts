import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HeaderModule} from "../../custom-modules/header/header.module";
import {TradingPage} from "./pages/trading/trading.page";
import {IonicModule} from "@ionic/angular";
import {TradingRequestService} from "./data/services/trading-request.service";
import {TradingFormComponent} from "./components/trading-form/trading-form.component";
import {ReactiveFormsModule} from "@angular/forms";

const components = [
    TradingPage,
    TradingFormComponent
];

const routes: Routes = [
    {
        path: '',
        component: TradingPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
        IonicModule,
        ReactiveFormsModule
    ],
    declarations: components,
    exports: [
        ...components,
        RouterModule
    ],
    providers: [
        TradingRequestService
    ]
})
export class TradingRoutingModule {

}