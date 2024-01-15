import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile-routing.module').then(m => m.ProfileRoutingModule)
    },
    {
        path: 'inventory',
        loadChildren: () => import('./pages/inventory/inventory-routing.module').then(m => m.InventoryRoutingModule)
    },
    {
        path: 'buy-and-sale',
        loadChildren: () => import('./pages/buy-and-sale/buy-and-sale-routing.module').then(m => m.BuyAndSaleRoutingModule)
    },
    {
        path: 'statistics',
        loadChildren: () => import('./pages/statistics/statistics-routing.module').then(m => m.StatisticsRoutingModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
