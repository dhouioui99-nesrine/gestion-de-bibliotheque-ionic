import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUserPageRoutingModule } from './home-user-routing.module';

import { HomeUserPage } from './home-user.page';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUserPageRoutingModule
  ],
  declarations: [HomeUserPage , NavbarUserComponent]
})
export class HomeUserPageModule {}
