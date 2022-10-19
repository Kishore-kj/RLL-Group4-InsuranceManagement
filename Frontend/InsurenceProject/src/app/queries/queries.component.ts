import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsernameService } from '../username.service';



@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {
 
  
  questions : any;

  constructor(private http:HttpClient) { }
 
  _url = 'http://localhost:9091/api/v1/query';
  ngOnInit() {
    let responce =  this.http.get(this._url);
    responce.subscribe((data)=>this.questions=data);
  }
  

}
