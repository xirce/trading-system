import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HeaderModule} from "../../custom-modules/header/header.module";
import {TradingPage} from "./pages/trading/trading.page";

const components = [
    TradingPage
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
        HeaderModule
    ],
    declarations: components,
    exports: [
        ...components,
        RouterModule
    ]
})
export class TradingRoutingModule {

}