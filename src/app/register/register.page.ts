import { Component, OnInit } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { AuthService } from '../service/auth-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AlertController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  implements OnInit {
  ngOnInit(): void {
    console.log('hello');
  }
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string = '';
  password: string = '';
 
  constructor(private authService: AuthService, private router: Router, private alertController: AlertController , private menu: MenuController) {}
 

  openMenu() {
    this.menu.open();
  }
  async register() {
    try {
      await this.authService.register({
        firstName: this.firstName,
      
        email: this.email,
        password: this.password,
        
      });
      await this.showAlert('Succès', 'user créé avec succès');
      this.router.navigateByUrl('/login');
      // this.router.navigateByUrl('/home');
    } catch (error) {
      console.error("Erreur d'inscription :", error);
    }
  }



  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
