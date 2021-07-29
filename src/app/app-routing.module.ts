import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'donor',
    loadChildren: () => import('./donor/donor-dashboard/donor-dashboard.module').then( m => m.DonorDashboardPageModule)
  },
  {
    path: 'donation-form',
    loadChildren: () => import('./donor//donation-form/donation-form.module').then( m => m.DonationFormPageModule)
  },
  {
    path: 'donation/:id',
    loadChildren: () => import('./donor//donation/donation.module').then( m => m.DonationPageModule)
  },
  {
    path: 'ngo-list',
    loadChildren: () => import('./ngo-list/ngo-list.module').then( m => m.NgoListPageModule)
  },
  {
    path: 'acceptor',
    loadChildren: () => import('./acceptor/acceptor-dashboard/acceptor-dashboard.module').then( m => m.AcceptorDashboardPageModule)
  },
  {
    path: 'ngo',
    loadChildren: () => import('./ngo/ngo-dashboard/ngo-dashboard.module').then( m => m.NgoDashboardPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
