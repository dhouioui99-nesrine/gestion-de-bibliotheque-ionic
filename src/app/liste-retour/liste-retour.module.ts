import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeRetourPageRoutingModule } from './liste-retour-routing.module';

import { ListeRetourPage } from './liste-retour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeRetourPageRoutingModule
  ],
  declarations: [ListeRetourPage]
})
export class ListeRetourPageModule {}
