import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.scss'],
})
export class NavbarUserComponent   {

  constructor(private menu: MenuController, private authService: AuthService, private router: Router) {}

  openMenu() {
    this.menu.open();
  }


  logout() {
    localStorage.removeItem('authToken'); // Remove stored token
    this.router.navigate(['/login']); // Redirect to login page
    console.log("User logged out successfully.");
  }
}
