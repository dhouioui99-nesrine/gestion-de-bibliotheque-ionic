import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { Emprunter } from 'src/app/module/Emprunter';
import { user } from 'src/app/module/user';

import { LivreService } from 'src/app/service/livre.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  livres: any[] = [];

  Emprunters: Emprunter[] = [];

  constructor(private firestore: AngularFirestore, private livreService: LivreService , private alertController: AlertController ,private menu: MenuController,  private router: Router ) {}

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

  async emprunterLivre(livre: any) {
    // Affiche les données du livre pour débogage
    console.log("Données du livre sélectionné:", livre);
  
    // Vérifiez les champs attendus
    if (!livre.title || !livre.author) {
      console.error("Le livre sélectionné a des champs manquants:", livre);
      return; // Arrête la fonction si un champ est manquant
    }
 
    // Données à envoyer dans la collection "Emprunter"
    const empruntData = {
      title: livre.title,       // Doit correspondre à la clé correcte
      author: livre.author,     // Doit correspondre à la clé correcte
      category: livre.category, // Vérifiez que ce champ existe aussi
      description: livre.description || '', // Valeur par défaut si undefined
      dateEmprunt:new Date(2024, 0, 1),// 1er janvier 2024
      utilisateurId: livre.userId || 'id_utilisateur', // ID de l'utilisateur qui emprunte
  
      livreId: livre.id || null // Assurez-vous que 'livre.id' est défini
    };
 
    console.log("Données à ajouter à Firestore:", empruntData); // Vérifiez les données avant l'ajout
    await this.showAlert('Succès', 'Livre emprunté avec succès');
    this.firestore.collection('Emprunter').add(empruntData)
    
      .then(() => {
        console.log("Livre emprunté avec succès!");
        
      })
      .catch((error) => {
        console.error("Erreur lors de l'emprunt du livre:", error);
      });
 
  }


  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
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


  // Button retour


  
  async retournerLivre(livre: any) {
  

      // Affiche les données du livre pour débogage
      console.log("Données du livre sélectionné:", livre);
    
      // Vérifiez les champs attendus
      if (!livre.title || !livre.author) {
        console.error("Le livre sélectionné a des champs manquants:", livre.title);
        return; // Arrête la fonction si un champ est manquant
      }
    
      // Données à envoyer dans la collection "Emprunter"
      const empruntData = {
        title: livre.title,       // Doit correspondre à la clé correcte
        author: livre.author,     // Doit correspondre à la clé correcte
        category: livre.category, // Vérifiez que ce champ existe aussi
        description: livre.description || '', // Valeur par défaut si undefined
        dateretour:new Date(2024, 0, 1),// 1er janvier 2024
        utilisateurId: livre.userId || 'id_utilisateur', // ID de l'utilisateur qui emprunte
        
        livreId: livre.id || null // Assurez-vous que 'livre.id' est défini
      };
      await this.showAlert('Succès', 'Livre est retour avec succès');
      console.log("Données à ajouter à Firestore:", empruntData); // Vérifiez les données avant l'ajout
    
      this.firestore.collection('Retour').add(empruntData)
        .then(() => {
          console.log("Livre retour avec succès!");
        })
        .catch((error) => {
          console.error("Erreur lors de retour du livre:", error);
        });
    }


  }