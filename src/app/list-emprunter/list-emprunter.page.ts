import { Component, OnInit } from '@angular/core';
import { EmprunterService } from '../service/emprunter.service';
import { Emprunter } from '../module/Emprunter';
import { AlertController, MenuController } from '@ionic/angular';
import { Timestamp } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-emprunter',
  templateUrl: './list-emprunter.page.html',
  styleUrls: ['./list-emprunter.page.scss'],
})
export class ListEmprunterPage implements OnInit {

  Emprunters: Emprunter[] = [];
  
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
      this.Emprunters = data;
      this.loadBooks();
    });
  }
  loadBooks() {
    this.emprunterservice.getEmprunter().subscribe((data) => {
      this.Emprunters = data;
    });
  }

  async editBook(Emprunter: Emprunter) {
    const alert = await this.alertController.create({
      header: 'Modifier le Livre',
      inputs: [
        { name: 'title', type: 'text', placeholder: 'Titre', value: Emprunter.title },
        { name: 'author', type: 'text', placeholder: 'Auteur', value: Emprunter.author },
        { name: 'category', type: 'text', placeholder: 'Catégorie', value: Emprunter.category },
        { name: 'description', type: 'textarea', placeholder: 'Description', value: Emprunter.description },
     
        { name: 'dateEmprunt', type: 'text', placeholder: 'dateEmprunt', value: Emprunter.dateEmprunt },
        { name: 'utilisateurId', type: 'text', placeholder: 'utilisateurId', value: Emprunter.utilisateurId },
        { name: 'livreId', type: 'text', placeholder: 'livreId', value: Emprunter.livreId }
     
     
        ],
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Enregistrer',
          handler: async (data) => {
            const updatedEmprunter = {
              title: data.title,
              author: data.author,
              category: data.category,
              description: data.description,
              dateEmprunt: data.dateEmprunt,
              utilisateurId : data.utilisateurId,
              livreId : data.livreId
            };
            await this.updateEmprunter(Emprunter.id, updatedEmprunter);
          }
        }
      ]
    });

    await alert.present();
  }

  async updateEmprunter(id: any, updatedEmprunter: any) {
    try {
      await this.emprunterservice.updateEmprunter(id, updatedEmprunter);
      console.log('Emprunter mis à jour avec succès');
      this.loadBooks(); // Rechargez la liste des Emprunter après la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour du Emprunter :', error);
    }
  }

  async deleteEmprunter(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmer',
      message: 'Voulez-vous vraiment supprimer ce Emprunter ?',
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