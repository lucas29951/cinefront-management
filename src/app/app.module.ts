import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { CompraComponent } from './compra/compra.component';
import { PeliculaslistComponent } from './peliculaslist/peliculaslist.component';
import { PeliculadetailComponent } from './peliculadetail/peliculadetail.component';
import { FuncioneslistComponent } from './funcioneslist/funcioneslist.component';
import { HistorialcomprasComponent } from './historialcompras/historialcompras.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    AdminpanelComponent,
    CompraComponent,
    PeliculaslistComponent,
    PeliculadetailComponent,
    FuncioneslistComponent,
    HistorialcomprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
