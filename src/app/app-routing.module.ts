import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { CompraComponent } from './compra/compra.component';
import { PeliculaslistComponent } from './peliculaslist/peliculaslist.component';
import { PeliculadetailComponent } from './peliculadetail/peliculadetail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminpanelComponent },
  { path: 'peliculas', component: PeliculaslistComponent },
  { path: 'peliculas/:id', component: PeliculadetailComponent },
  { path: 'comprar/:id', component: CompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
