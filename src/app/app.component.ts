import {Component, inject} from '@angular/core';
import {AuthRequestService} from "./custom-modules/auth/services/auth-request.service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public links = [
        { title: 'Профиль', url: '/profile', icon: 'person-outline' },
        { title: 'Инвентарь', url: '/inventory', icon: 'file-tray-full-outline' },
        { title: 'Покупка/продажа', url: '/buy-and-sale', icon: 'cash-outline' },
        { title: 'Статистика', url: '/statistics', icon: 'trending-up-outline' }
    ];

    private _authService: AuthRequestService = inject(AuthRequestService);

    constructor() {
        this._authService.getAuthStatus()
            .subscribe();
    }
}
