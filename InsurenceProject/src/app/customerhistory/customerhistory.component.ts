import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customerhistory',
  templateUrl: './customerhistory.component.html',
  styleUrls: ['./customerhistory.component.css']
})
export class CustomerhistoryComponent implements OnInit {

  constructor(private http:HttpClient) { }
  books : any;
  policies : any;

  ngOnInit(): void {
    let responce =  this.http.get('http://localhost:9091/api/v1/approved');
    responce.subscribe((data)=>this.books=data);
    let responces =  this.http.get('http://localhost:9091/api/v1/disapproved');
    responces.subscribe((data)=>this.policies=data);
    console.log(this.books);
  }

}
