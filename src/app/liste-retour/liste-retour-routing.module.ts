import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeRetourPage } from './liste-retour.page';

const routes: Routes = [
  {
    path: '',
    component: ListeRetourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeRetourPageRoutingModule {}
