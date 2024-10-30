import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
import { addDoc, collection, Firestore } from 'firebase/firestore';
import { LivreService } from '../service/livre.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage   {

  title: string = '';
  author: string = '';
  category: string = '';
  description: string = '';
  currentUser:any
  livreForm: FormGroup;
 

  constructor(
    private fb: FormBuilder,
    private livreservice: LivreService,
    private alertController: AlertController,
    private router: Router,
    private menu: MenuController,
    private userService : AuthService
  ) {
    this.userService.getUser().subscribe(res=>{
      this.currentUser = res
    })

    this.livreForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
     category: ['', Validators.required],
      description: ['', Validators.required],
      
      
    });
  }

  async onSubmit() {
    if (this.livreForm.valid) {
      try {
        this.livreForm.value.userId = this.currentUser.uid
        await this.livreservice.createlivres(
          this.livreForm.value
        );
        await this.showAlert('Succès', 'Livre créé avec succès');
        this.router.navigateByUrl('/list-livre');
      } catch (error) {
        console.error('Error creating Livre:', error);
      }
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
  ngOnInit(): void {
    
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


  

