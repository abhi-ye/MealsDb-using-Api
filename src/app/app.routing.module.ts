import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavMealsComponent } from './fav-meals/fav-meals.component';
import { LoginComponent } from './login/login.component';
import { mealsHomeComponent } from './mealsHome/mealsHome';


const routes: Routes = [
  { path: '', component: mealsHomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'mymeals', component: FavMealsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }