import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Meal { idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;}
@Injectable()
export class firebaseService {

  constructor(public db: AngularFirestore) { }

  createUser(value: { name: string; surname: any; age: string; }){
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age)
    });
  }
  addMeal(meal: any){
    return this.db.collection('meals').add({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strCategory: meal.strCategory,
      strInstructions: meal.strInstructions,
      strMealThumb: meal.strMealThumb
    })
  }
  getMyMeals(): Observable<any>{
    return this.db.collection('meals').snapshotChanges().pipe(
map(actions => actions.map(a => {
const data=a.payload.doc.data() as Meal;
const id=a.payload.doc.id;
return { id,...data };
}))
);
  }
}