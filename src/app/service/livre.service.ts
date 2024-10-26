import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private livresCollection = 'livres';

  constructor(private firestore: Firestore) {}

  async addLivre(livre: { title: string; author: string; description: string }) {
    try {
      const livreRef = collection(this.firestore, this.livresCollection);
      await addDoc(livreRef, livre);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du livre :', error);
      throw error;
    }
  }

  async getLivres() {
    try {
      const livreRef = collection(this.firestore, this.livresCollection);
      const snapshot = await getDocs(livreRef);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Erreur lors de la récupération des livres :', error);
      throw error;
    }
  }
}