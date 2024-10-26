import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../service/auth-service.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage   {

  errorMessage!: string;

  constructor(private authService: AuthService) {}

  async onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;

      try {
        await this.authService.login(email, password);
        console.log('Connexion réussie');
      } catch (error) {
        console.error('Erreur de connexion :', error);
      }
    } else {
      this.errorMessage = 'Le formulaire est invalide !';
    }
  }
}