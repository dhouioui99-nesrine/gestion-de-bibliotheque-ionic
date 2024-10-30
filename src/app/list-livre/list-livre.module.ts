import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListLivrePageRoutingModule } from './list-livre-routing.module';

import { ListLivrePage } from './list-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListLivrePageRoutingModule
  ],
  declarations: [ListLivrePage]
})
export class ListLivrePageModule {}
