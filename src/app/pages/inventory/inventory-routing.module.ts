import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {InventoryPage} from "./pages/inventory/inventory.page";
import {HeaderModule} from "../../custom-modules/header/header.module";

const components = [
    InventoryPage
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
        HeaderModule
    ],
    declarations: components,
    exports: [
        ...components,
        RouterModule
    ]
})
export class InventoryRoutingModule {

}