import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmprunterPage } from './list-emprunter.page';

const routes: Routes = [
  {
    path: '',
    component: ListEmprunterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEmprunterPageRoutingModule {}
