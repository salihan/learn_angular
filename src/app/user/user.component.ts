import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User ={
    "id": 890,
    "nama": "Salihan",
    "email": "salihan@yahoo.com",
    "mobile": "017-6953664"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
