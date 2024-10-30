import { Component, OnInit } from '@angular/core';
import { EmprunterService } from '../service/emprunter.service';

import { AlertController, MenuController } from '@ionic/angular';
import { Timestamp } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Retour } from '../module/Retour';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-retour',
  templateUrl: './liste-retour.page.html',
  styleUrls: ['./liste-retour.page.scss'],
})
export class ListeRetourPage implements OnInit {

  Retour: Retour[] = [];
  
  constructor(private emprunterservice: EmprunterService ,  private alertController: AlertController, private firestore: AngularFirestore,
    private router: Router,
    private menu: MenuController
  ) {}
  formatDate(date: Timestamp | Date) {
    if (date instanceof Timestamp) {
      date = date.toDate(); // Convertir Timestamp en Date
    }
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return date.toLocaleDateString('fr-FR', options); // Formatage au format français
  }
  ngOnInit() {
    this.emprunterservice.getEmprunter().subscribe((data) => {
      this.Retour = data;
      this.loadBooks();
    });
  }
  loadBooks() {
    this.emprunterservice.getEmprunter().subscribe((data) => {
      this.Retour = data;
    });
  }

 

  async deleteRetour(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmer',
      message: 'Voulez-vous vraiment supprimer ce retour ?',
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Supprimer',
          handler: () => {
            this.emprunterservice.deleteEmprunter(id).then(() => {
              this.loadBooks(); // Rechargez la liste des Emprunter après la suppression
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