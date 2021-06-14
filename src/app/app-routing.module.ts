import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginadmin',
    pathMatch: 'full'
  },
  
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'header', loadChildren: () => import('./pages/header/header.module').then(m => m.HeaderModule) },
  { path: 'loginadmin', loadChildren: () => import('./pages/loginadmin/loginadmin.module').then(m => m.LoginadminModule) },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
