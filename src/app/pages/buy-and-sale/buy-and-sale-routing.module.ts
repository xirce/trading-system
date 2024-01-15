import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BuyAndSalePage} from "./pages/buy-and-sale/buy-and-sale.page";
import {HeaderModule} from "../../custom-modules/header/header.module";

const components = [
    BuyAndSalePage
];

const routes: Routes = [
    {
        path: '',
        component: BuyAndSalePage
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
export class BuyAndSaleRoutingModule {

}