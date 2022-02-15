import { Component, OnInit } from '@angular/core';
import { firebaseService, Meal } from '../services/firebase.service'

@Component({
  selector: 'app-fav-meals',
  templateUrl: './fav-meals.component.html',
  styleUrls: ['./fav-meals.component.css']
})
export class FavMealsComponent implements OnInit {

  constructor(private firebaseService: firebaseService) { }

  ngOnInit(): void {
  }
  myMeals: any;
  // getMyMealsFromDb(){
  //   console.log("------")
  //   this.myMeals= this.firebaseService.getMyMeals().then((res: Meal) =>{
  //     console.log(res);
  //     return res;
  //   });
  // }

}
