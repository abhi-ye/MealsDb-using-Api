import { Component, Input } from '@angular/core';
import { firebaseService } from '../services/firebase.service'

@Component({
  selector: 'meals-card',
  templateUrl: './mealsCard.html',
  styleUrls: ['./mealsCard.css']
})
export class mealsCardComponent {
  constructor(private firebaseService: firebaseService) { }
  @Input()
mealInfo: any;

addItem(item: any){
  this.firebaseService.addMeal(item).then(res =>{console.log(res)});
}
}