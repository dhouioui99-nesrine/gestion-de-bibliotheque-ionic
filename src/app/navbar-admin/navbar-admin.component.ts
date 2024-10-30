import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent   {

  constructor(private menu: MenuController, private router: Router) {}

  openMenu() {
    this.menu.open();
  }


  logout() {
    localStorage.removeItem('authToken'); // Remove stored token
    this.router.navigate(['/login']); // Redirect to login page
    console.log("User logged out successfully.");
    
  }
}

