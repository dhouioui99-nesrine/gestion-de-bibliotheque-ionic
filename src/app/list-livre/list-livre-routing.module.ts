import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLivrePage } from './list-livre.page';

const routes: Routes = [
  {
    path: '',
    component: ListLivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListLivrePageRoutingModule {}
