import { Component, OnInit } from '@angular/core';
import { user } from '../module/user';
import { UserService } from '../service/user-service.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {


  users: user[] = [];
  constructor(private userservice: UserService ,  private alertController: AlertController , 
    private router: Router,
    private menu: MenuController,) {}

    ngOnInit() {
      this.userservice.getUsers().subscribe((data) => {
        this.users = data;
        this.loadBooks();
      });
    }
    loadBooks() {
      this.userservice.getUsers().subscribe((data) => {
        this.users = data;
      });
    }
  

  
  async deleteUser(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmer',
      message: 'Voulez-vous vraiment supprimer ce user ?',
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Supprimer',
          handler: () => {
            this.userservice.deleteUser(id).then(() => {
              this.loadBooks(); // Rechargez la liste des livres après la suppression
            });
          }
        }
      ]
    });

    await alert.present();
  }




  openMenu() {
    this.menu.open();
  }


  logout() {
    localStorage.removeItem('authToken'); // Remove stored token
    this.router.navigate(['/login']); // Redirect to login page
    console.log("User logged out successfully.");
    
  }
}

