import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'donor',
    loadChildren: () => import('./food-donor/food-donor.module').then( m => m.FoodDonorPageModule)
  },
  {
    path: 'donation-form',
    loadChildren: () => import('./donation-form/donation-form.module').then( m => m.DonationFormPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
