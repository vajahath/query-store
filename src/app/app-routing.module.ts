import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/queries', pathMatch: 'full' },
  { path: 'queries', component: AppCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
