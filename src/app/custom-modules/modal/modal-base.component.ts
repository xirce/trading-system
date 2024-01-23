import {BehaviorSubject, Observable} from "rxjs";

export class ModalBaseComponent {
    public modalVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}