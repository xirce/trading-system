import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProfileComponent} from "./pages/profile/profile.component";
import {RouterModule, Routes} from "@angular/router";
import {HeaderModule} from "../../custom-modules/header/header.module";
import {IonicModule} from "@ionic/angular";

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
        IonicModule
    ],
    exports: [
        ProfileComponent,
        RouterModule
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileRoutingModule {

}