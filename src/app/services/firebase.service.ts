import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
}