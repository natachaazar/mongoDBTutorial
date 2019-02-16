import {RouterModule, Routes} from '@angular/router';

const AppRoutes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', loadChildren: './landing/landing.module#LandingModule'},
  {path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  {path: '**', redirectTo: '/landing'}
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});
