import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-res-user',
  templateUrl: './res-user.component.html',
  styleUrls: ['./res-user.component.css']
})
export class ResUserComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("https://jsonplaceholder.typicode.com/users");
    resp.subscribe( (data)=> console.log(data) );
  }

}
