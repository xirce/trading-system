import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {InventoryPage} from "./pages/inventory/inventory.page";
import {HeaderModule} from "../../custom-modules/header/header.module";
import {InventoryListComponent} from "./components/inventory-list/inventory-list.component";
import {InventoryItemComponent} from "./components/inventory-item/inventory-item.component";
import {IonicModule} from "@ionic/angular";
import {InventoryRequestService} from "./data/services/inventory-request.service";
import {InventoryItemModalComponent} from "./components/inventory-item-modal/inventory-item-modal.component";
import {CURRENT_INVENTORY_ITEM} from "./tokens/current-inventory-item.token";
import {BehaviorSubject} from "rxjs";
import {ReactiveFormsModule} from "@angular/forms";
import {InventoryOnSalePage} from "./pages/inventory-on-sale/inventory-on-sale.page";
import {InventoryOnSaleModalComponent} from "./components/inventory-on-sale-modal/inventory-on-sale-modal.component";
import {InventoryOnSaleListComponent} from "./components/inventory-on-sale-list/inventory-on-sale-list.component";

const components = [
    InventoryPage,
    InventoryListComponent,
    InventoryItemComponent,
    InventoryItemModalComponent,
    InventoryOnSalePage,
    InventoryOnSaleModalComponent,
    InventoryOnSaleListComponent
];

const routes: Routes = [
    {
        path: '',
        redirectTo: 'item',
        pathMatch: 'full'
    },
    {
        path: 'items',
        component: InventoryPage
    },
    {
        path: 'sale',
        component: InventoryOnSalePage
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
        InventoryRequestService,
        {
            provide: CURRENT_INVENTORY_ITEM,
            useValue: new BehaviorSubject(null)
        }
    ]
})
export class InventoryRoutingModule {

}