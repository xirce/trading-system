import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HeaderModule} from "../../custom-modules/header/header.module";
import {TradingPage} from "./pages/trading/trading.page";
import {IonicModule} from "@ionic/angular";
import {TradingRequestService} from "./data/services/trading-request.service";
import {TradingFormComponent} from "./components/trading-form/trading-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TradingItemsPage} from "./pages/trading-items/trading-items.page";
import {TradingItemComponent} from "./components/trading-item/trading-item.component";
import {TradingItemModalComponent} from "./components/trading-item-modal/trading-item-modal.component";

const components = [
    TradingPage,
    TradingFormComponent,
    TradingItemsPage,
    TradingItemComponent,
    TradingItemModalComponent
];

const routes: Routes = [
    {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    },
    {
        path: 'form',
        component: TradingPage
    },
    {
        path: 'items',
        component: TradingItemsPage
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