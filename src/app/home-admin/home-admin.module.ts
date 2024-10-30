import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAdminPageRoutingModule } from './home-admin-routing.module';

import { HomeAdminPage } from './home-admin.page';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAdminPageRoutingModule
  ],
  declarations: [HomeAdminPage,NavbarAdminComponent]
})
export class HomeAdminPageModule {}
