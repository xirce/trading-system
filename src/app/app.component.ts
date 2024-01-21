import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {AuthRequestService} from "./custom-modules/auth/services/auth-request.service";
import {Router} from "@angular/router";
import {BehaviorSubject, catchError, EMPTY} from "rxjs";
import {MARKET_KEY_TOKEN} from "./custom-modules/auth/tokens/market-key.token";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    public links = [
        { title: 'Профиль', url: '/profile', icon: 'person-outline' },
        { title: 'Инвентарь', url: '/inventory', icon: 'file-tray-full-outline' },
        { title: 'Покупка/продажа', url: '/trading', icon: 'cash-outline' },
        { title: 'Статистика', url: '/statistics', icon: 'trending-up-outline' }
    ];

    public readonly authService: AuthRequestService = inject(AuthRequestService);

    private _marketKey$: BehaviorSubject<string> = inject(MARKET_KEY_TOKEN);
    private _router: Router = inject(Router);

    public ngOnInit(): void {
        const key: string | null = localStorage.getItem('marketKey');

        if (key) {
            this._marketKey$.next(key);
        }

        this.authService.authorize()
            .pipe(
                catchError(() => {
                    this._router.navigate(['/auth']);

                    return EMPTY;
                })
            )
            .subscribe((isAuthorized: boolean) => {
                if (!isAuthorized) {
                    this._router.navigate(['/auth']);
                } else {
                    this._router.navigate(['/profile']);
                }
            });
    }
}
