import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ProfileComponent} from "./pages/profile/profile.component";
import {RouterModule, Routes} from "@angular/router";
import {HeaderModule} from "../../custom-modules/header/header.module";
import {IonicModule} from "@ionic/angular";
import {ProfileRequestService} from "./data/services/profile-request.service";
import {ReactiveFormsModule} from "@angular/forms";

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
        IonicModule,
        NgOptimizedImage,
        ReactiveFormsModule
    ],
    exports: [
        ProfileComponent,
        RouterModule
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [
        ProfileRequestService
    ]
})
export class ProfileRoutingModule {
}