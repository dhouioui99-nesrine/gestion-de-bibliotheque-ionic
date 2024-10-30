import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore, private router: Router
  ) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(userData: {
    firstName: string;
   
   
    email: string;
    password: string;
  }) {

    const { firstName,  email, password } = userData;
    console.log('Tentative d\'inscription avec:', email);
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('User registered successfully:', userCredential);
        if (userCredential.user) {
          this.firestore.collection('users').doc(userCredential.user.uid).set({
            firstName,
         
            email,
          });
        }
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        throw error; // Laissez l'erreur remonter pour la gestion dans le composant
      });
  }
 

  getUser() {
    return this.afAuth.user;
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(map(user => !!user));
  }

  async logout() {
    try {
      await this.afAuth.signOut(); // Logs out the user from Firebase
      this.router.navigate(['/login']); // Redirect to login page
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
}
