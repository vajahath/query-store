import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QueriesComponent } from './queries/queries.component';
import { DeploymentsComponent } from './deployments/deployments.component';

const routes: Routes = [
  { path: '', redirectTo: '/queries', pathMatch: 'full' },
  { path: 'queries', component: QueriesComponent },
  { path: 'deployments/:env', component: DeploymentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
