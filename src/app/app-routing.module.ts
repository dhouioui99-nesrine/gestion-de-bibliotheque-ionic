import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'livre',
    loadChildren: () => import('./livre/livre.module').then( m => m.LivrePageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'list-livre',
    loadChildren: () => import('./list-livre/list-livre.module').then( m => m.ListLivrePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./user/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-emprunter',
    loadChildren: () => import('./list-emprunter/list-emprunter.module').then( m => m.ListEmprunterPageModule)
  },
  {
    path: 'home-user',
    loadChildren: () => import('./home-user/home-user.module').then( m => m.HomeUserPageModule)
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'list-user',
    loadChildren: () => import('./list-user/list-user.module').then( m => m.ListUserPageModule)
  },
  {
    path: 'liste-retour',
    loadChildren: () => import('./liste-retour/liste-retour.module').then( m => m.ListeRetourPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
