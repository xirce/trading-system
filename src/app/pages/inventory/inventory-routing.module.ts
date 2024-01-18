import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {InventoryPage} from "./pages/inventory/inventory.page";
import {HeaderModule} from "../../custom-modules/header/header.module";
import {InventoryListComponent} from "./components/inventory-list/inventory-list.component";
import {InventoryItemComponent} from "./components/inventory-item/inventory-item.component";
import {IonicModule} from "@ionic/angular";
import {InventoryRequestService} from "./data/services/inventory-request.service";

const components = [
    InventoryPage,
    InventoryListComponent,
    InventoryItemComponent
];

const routes: Routes = [
    {
        path: '',
        component: InventoryPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
        IonicModule
    ],
    declarations: components,
    exports: [
        ...components,
        RouterModule
    ],
    providers: [
        InventoryRequestService
    ]
})
export class InventoryRoutingModule {

}