import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'donor',
    loadChildren: () => import('./food-donor/food-donor.module').then( m => m.FoodDonorPageModule)
  },
  {
    path: 'donation-form',
    loadChildren: () => import('./donation-form/donation-form.module').then( m => m.DonationFormPageModule)
  },
  {
    path: 'ngo-list',
    loadChildren: () => import('./ngo-list/ngo-list.module').then( m => m.NgoListPageModule)
  },
  {
    path: 'donation/:id',
    loadChildren: () => import('./donation/donation.module').then( m => m.DonationPageModule)
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
