import { Component, OnInit } from '@angular/core';
import { Livre } from '../module/livre';
import { LivreService } from '../service/livre.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.page.html',
  styleUrls: ['./list-livre.page.scss'],
})
export class ListLivrePage implements OnInit {
  livres: Livre[] = [];

  constructor(private livreService: LivreService ,  private alertController: AlertController , private router: Router,
    private menu: MenuController,) {}

  ngOnInit() {
    this.livreService.getlivres().subscribe((data) => {
      this.livres = data;
      this.loadBooks();
    });
  }
  loadBooks() {
    this.livreService.getlivres().subscribe((data) => {
      this.livres = data;
    });
  }

  async editBook(livre: Livre) {
    const alert = await this.alertController.create({
      header: 'Modifier le Livre',
      inputs: [
        { name: 'title', type: 'text', placeholder: 'Titre', value: livre.title },
        { name: 'author', type: 'text', placeholder: 'Auteur', value: livre.author },
        { name: 'category', type: 'text', placeholder: 'Catégorie', value: livre.category },
        { name: 'description', type: 'textarea', placeholder: 'Description', value: livre.description }
      ],
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Enregistrer',
          handler: async (data) => {
            const updatedLivre = {
              title: data.title,
              author: data.author,
              category: data.category,
              description: data.description
            };
            await this.updateLivre(livre.id, updatedLivre);
          }
        }
      ]
    });

    await alert.present();
  }

  async updateLivre(id: any, updatedLivre: any) {
    try {
      await this.livreService.updatelivres(id, updatedLivre);
      console.log('Livre mis à jour avec succès');
      this.loadBooks(); // Rechargez la liste des livres après la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour du livre :', error);
    }
  }

  async deleteBook(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmer',
      message: 'Voulez-vous vraiment supprimer ce livre ?',
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Supprimer',
          handler: () => {
            this.livreService.deletelivres(id).then(() => {
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

