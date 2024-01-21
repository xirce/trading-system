import {Component, DestroyRef, inject} from "@angular/core";
import {AuthRequestService} from "../../custom-modules/auth/services/auth-request.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {BehaviorSubject} from "rxjs";
import {MARKET_KEY_TOKEN} from "../../custom-modules/auth/tokens/market-key.token";
import {Router} from "@angular/router";

@Component({
    templateUrl: './auth.component.html',
    styleUrls: ['./styles/auth.scss']
})
export class AuthComponent {
    public keyControlValue: string;
    private _authService: AuthRequestService = inject(AuthRequestService);
    private _marketKey$: BehaviorSubject<string> = inject(MARKET_KEY_TOKEN);
    private _router: Router = inject(Router);
    private _destroyRef = inject(DestroyRef);

    public authorize(): void {
        this._marketKey$.next(this.keyControlValue);
        this._authService.authorize()
            .pipe(
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe(() => {
                localStorage.setItem('marketKey', this.keyControlValue);
                this._router.navigate(['/profile']);
            })
    }
}