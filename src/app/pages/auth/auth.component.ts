import {Component, DestroyRef, inject} from "@angular/core";
import {AuthRequestService} from "../../custom-modules/auth/services/auth-request.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    templateUrl: './auth.component.html',
    styleUrls: ['./styles/auth.scss']
})
export class AuthComponent {
    public keyControlValue: string;
    private _authService: AuthRequestService = inject(AuthRequestService);
    private _destroyRef = inject(DestroyRef);

    public authorize(): void {
        this._authService.authorize(this.keyControlValue)
            .pipe(
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe()
    }
}