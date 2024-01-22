import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SuccessModalComponent} from "./components/success-modal/success-modal.component";

const components = [
    SuccessModalComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: components,
    exports: components
})
export class SuccessModalModule {

}