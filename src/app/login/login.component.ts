import { Component, OnInit } from '@angular/core';
import { firebaseService } from '../services/firebase.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private firebaseService: firebaseService) { }

  ngOnInit(): void {
  }

  onSubmit(value: any){
    console.log(value)
    this.firebaseService.createUser(value)
    .then(
      res => {
        console.log(res+'---')
        // this.resetFields();
        // this.router.navigate(['/']);
      }
    )
  }
  

}
