import { Component, Input } from '@angular/core';

@Component({
  selector: 'meals-card',
  templateUrl: './mealsCard.html',
  styleUrls: ['./mealsCard.css']
})
export class mealsCardComponent {
  @Input()
mealInfo: any;
}