import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.css']
})
export class UserhistoryComponent implements OnInit {

  constructor(private usernameService:UsernameService,private http:HttpClient) { }
  books : any;
  policies : any;
  userName:string|undefined;
  ngOnInit(): void {
    
    this.userName = this.usernameService.getUsername();
    console.log(this.userName);
   
    let responce =  this.http.get('http://localhost:9091/api/v1/approved');
    responce.subscribe((data)=>this.books=data);
    let responces =  this.http.get('http://localhost:9091/api/v1/disapproved');
    responces.subscribe((data)=>this.policies=data);
    console.log(this.books);

  }

}
