import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public links = [
        { title: 'Профиль', url: '/profile', icon: 'person-outline' },
        { title: 'Инвентарь', url: '/inventory', icon: 'cash-outline' },
        { title: 'Покупка/продажа', url: '/buy-and-sale', icon: 'document-text-outline' },
        { title: 'Статистика', url: '/statistics', icon: 'trending-up-outline' }
    ];
}
