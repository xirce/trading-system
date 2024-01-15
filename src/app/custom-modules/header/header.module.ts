import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {IonicModule} from "@ionic/angular";

const components = [
    HeaderComponent
];
@NgModule({
    imports: [CommonModule, IonicModule],
    exports: components,
    declarations: components
})
export class HeaderModule {

}