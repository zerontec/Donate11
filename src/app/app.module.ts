import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { CampaComponent } from './Components/campa/campa.component';
import { Page404Component } from './Components/page404/page404.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CampaListComponent } from './Components/campa-list/campa-list.component';
import { CampaDetailsComponent } from './Components/campa-details/campa-details.component';
import { HeroeDetailsComponent } from './Components/heroe-details/heroe-details.component';
import { LoginComponent } from './Components/users/login/login.component';
import { RegisterComponent } from './Components/users/register/register.component';
import { ProfileComponent } from './Components/users/profile/profile.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CentrosComponent } from './Components/centros/centros.component';
import { SliderComponent } from './Components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    CampaComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
    CampaListComponent,
    CampaDetailsComponent,
    HeroeDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ContactComponent,
    CentrosComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
