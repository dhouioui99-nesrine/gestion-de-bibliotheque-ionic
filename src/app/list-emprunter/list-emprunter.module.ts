import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEmprunterPageRoutingModule } from './list-emprunter-routing.module';

import { ListEmprunterPage } from './list-emprunter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEmprunterPageRoutingModule
  ],
  declarations: [ListEmprunterPage]
})
export class ListEmprunterPageModule {}
