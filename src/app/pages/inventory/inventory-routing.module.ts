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

const components = [
    InventoryPage,
    InventoryListComponent,
    InventoryItemComponent,
    InventoryItemModalComponent
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