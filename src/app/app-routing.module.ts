import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QueriesComponent } from './queries/queries.component';

const routes: Routes = [
  { path: '', redirectTo: '/queries', pathMatch: 'full' },
  { path: 'queries', component: QueriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
