import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrePageRoutingModule } from './livre-routing.module';

import { LivrePage } from './livre.page';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LivrePageRoutingModule
  ],
  declarations: [LivrePage ] 
})
export class LivrePageModule {}
