import {Component} from "@angular/core";
import {AuthRequestService} from "../../custom-modules/auth/services/auth-request.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    constructor(
        private _authService: AuthRequestService
    ) {
    }

    public authorize(): void {
        this._authService.authorize()
    }
}