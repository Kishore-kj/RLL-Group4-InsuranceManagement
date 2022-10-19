import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsernameService } from '../username.service';
import { history } from '../history';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  books : any;
  username:string | undefined;
  id : any| undefined;
  userName:string | undefined;


  constructor(private http:HttpClient,private usernameService:UsernameService,private history:HistoryService) { }

  ngOnInit() {
    this.username = this.usernameService.getUsername();
    console.log(this.username+"1234");
    this.userName = this.username!;
    this.id = new history(this.userName);
    this.history.getdetails(this.id).subscribe(data => console.log('succses', data),error => console.error('error', error))
  }

}
