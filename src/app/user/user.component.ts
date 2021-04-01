import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
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

  products2: any

  constructor(private servProducts: ProductService) { }

  ngOnInit(): void {
    this.products2 = this.servProducts.getProducts();
  }

}
