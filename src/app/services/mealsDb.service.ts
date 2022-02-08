import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class mealsDbService {
  private url = 'https://www.themealdb.com/api/json/v1/1'
  constructor(private http: HttpClient) { }

  getRandomMeal(){
    return this.http.get(this.url + '/random.php');
  }
}