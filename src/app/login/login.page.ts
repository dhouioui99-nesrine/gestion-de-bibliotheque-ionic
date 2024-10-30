import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { AuthService } from '../service/auth-service.service';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  implements OnInit {
  email: string = '';
  password: string = '';
  err : unknown = 'Somthing went wrong'
  @ViewChild('myElement') myElementRef!: ElementRef;
  constructor(private authService: AuthService, private router: Router,private menu: MenuController) {
    this.authService.getUser().subscribe(res=>{
      console.log(res);

    })
  }
  ngOnInit(): void {
    console.log('hellos');

  }


  openMenu() {
    this.menu.open();
  }
  async login() {
    try {
      const login = await this.authService.login(this.email, this.password);
      console.log(login)
      if (login.user?.email === 'admin@gmail.com') {
        // Redirige vers la page d'admin
        this.router.navigate(['/home-admin']);
      } else {
        // Redirige vers la page utilisateur standard
        this.router.navigate(['/home-user']);
      }
    } catch (error) {
      if (error instanceof FirebaseError) {

        this.err = error.message;
      }
      console.error('Erreur de connexion :', error);
      this.myElementRef.nativeElement.click()

    }
  }
}
