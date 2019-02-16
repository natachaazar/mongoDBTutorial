import {RouterModule, Routes} from '@angular/router';
import {TutorialComponent} from './tutorial.component';

const routes: Routes = [
  {path: '', component: TutorialComponent}
];

export const TutorialRoutingModule = RouterModule.forChild(routes);
