import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, Firestore, getDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth();
  private firestore = getFirestore();

  constructor( private router: Router) {}

  async register(fullName: string, email: string, password: string) {
    if (!fullName || !email || !password) {
      throw new Error('Les données utilisateur sont incomplètes : fullName, email ou password est manquant.');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const uid = userCredential.user.uid;

      // Enregistrer le nom complet et l'email dans Firestore
      await setDoc(doc(this.firestore, 'users', uid), {
        fullName: fullName,
        email: email
      });

      console.log('Inscription réussie :', userCredential);
      this.router.navigate(['/login']);
      return userCredential;
    } catch (error) {
      console.error('Erreur d\'inscription :', error);
      throw error; // Relancez l'erreur pour la gérer dans le composant
    }
  }


  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Connexion réussie :', userCredential);

      // Redirection en fonction de l'email
      if (email === 'admin@gmail.com') {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/livres']);
      }
    } catch (error) {
      console.error('Erreur de connexion :', error);
      throw error; // Relancer l'erreur pour qu'elle puisse être gérée dans le composant
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      console.log('Déconnexion réussie');
    } catch (error) {
      console.error('Erreur de déconnexion :', error);
      throw error;
    }
  }
}