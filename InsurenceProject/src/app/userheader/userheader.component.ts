import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../username.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(private usernameService:UsernameService,private http:HttpClient) { }
  username:string|undefined;
  ngOnInit(): void {
    this.username = this.usernameService.getUsername();
  }
 logout(){
  let response =  this.http.get('http://localhost:9091/api/v1/logout').subscribe(data => console.log('succses', data),error => console.error('error', error))
  
 }
}
