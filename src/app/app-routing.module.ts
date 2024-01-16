import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {authGuard} from "./custom-modules/auth/guards/auth.guard";
import {AuthComponent} from "./pages/auth/auth.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile-routing.module').then(m => m.ProfileRoutingModule),
        canActivate: [authGuard]
    },
    {
        path: 'inventory',
        loadChildren: () => import('./pages/inventory/inventory-routing.module').then(m => m.InventoryRoutingModule),
        canActivate: [authGuard]
    },
    {
        path: 'buy-and-sale',
        loadChildren: () => import('./pages/buy-and-sale/buy-and-sale-routing.module').then(m => m.BuyAndSaleRoutingModule),
        canActivate: [authGuard]
    },
    {
        path: 'statistics',
        loadChildren: () => import('./pages/statistics/statistics-routing.module').then(m => m.StatisticsRoutingModule),
        canActivate: [authGuard]
    },
    {
        path: 'auth',
        component: AuthComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
