import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HistoryPage} from "./pages/history/history.page";
import {HeaderModule} from "../../custom-modules/header/header.module";

const components = [
    HistoryPage
];

const routes: Routes = [
    {
        path: '',
        component: HistoryPage
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
export class HistoryRoutingModule {

}