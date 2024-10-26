import { Component, OnInit } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { AuthService } from '../service/auth-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

    onSubmit(form: NgForm) {
      if (form.valid) {
        console.log("Nom complet :", this.fullName);
        console.log("Email :", this.email);
        console.log("Mot de passe :", this.password);
  
        // Appel à votre service d'inscription
        this.authService.register(this.fullName, this.email, this.password)
          .then(userCredential => {
            console.log('Inscription réussie :', userCredential);
          })
          .catch(error => {
            console.error('Erreur d\'inscription :', error);
          });
      } else {
        console.error('Le formulaire est invalide !');
      }
    }}
  