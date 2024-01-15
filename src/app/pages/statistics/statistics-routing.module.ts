import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderModule} from "../../custom-modules/header/header.module";
import {IonicModule} from "@ionic/angular";
import {StatisticsPage} from "./pages/statistics/statistics.page";

const routes: Routes = [
    {
        path: '',
        component: StatisticsPage
    }
];

const components = [
    StatisticsPage
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
        IonicModule
    ],
    exports: [
        ...components,
        RouterModule
    ],
    declarations: components
})
export class StatisticsRoutingModule {

}