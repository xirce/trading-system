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
        path: 'history',
        loadChildren: () => import('./pages/history/history-routing.module').then(m => m.HistoryRoutingModule)
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
