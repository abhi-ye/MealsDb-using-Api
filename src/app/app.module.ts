import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { mealsHomeComponent } from './mealsHome/mealsHome';
import { mealsCardComponent } from './mealsCard/mealsCard';
import { mealsDbService } from './services/mealsDb.service';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: mealsHomeComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    mealsHomeComponent,
    mealsCardComponent
  ],
  providers: [mealsDbService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

