import {RouterModule, Routes} from '@angular/router';

const AppRoutes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', loadChildren: './landing/landing.module#LandingModule'},
  {path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'definition', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'avantages', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'collections', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'commandes', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'recherches', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'criteres', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'aggregations', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'administration', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'relations', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  // {path: 'sauvegarde', loadChildren: './tutorial/tutorial.module#TutorialModule'},
  {path: '**', redirectTo: '/landing'}
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});
