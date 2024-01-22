import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ErrorModalComponent} from "./components/error-modal/error-modal.component";

const components = [
    ErrorModalComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: components,
    exports: components
})
export class ErrorModalModule {
}