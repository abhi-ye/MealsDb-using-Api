import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { mealsHomeComponent } from './mealsHome/mealsHome';
import { mealsCardComponent } from './mealsCard/mealsCard';
import { mealsDbService } from './services/mealsDb.service';



import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './login/login.component';
import { firebaseService } from './services/firebase.service';
import { FavMealsComponent } from './fav-meals/fav-meals.component';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    mealsHomeComponent,
    mealsCardComponent,
    LoginComponent,
    FavMealsComponent
  ],
  providers: [mealsDbService, firebaseService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

