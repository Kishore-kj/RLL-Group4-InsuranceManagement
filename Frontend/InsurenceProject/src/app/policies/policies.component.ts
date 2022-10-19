import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsernameService } from '../username.service';
import { Approvals } from '../Approvals';
import { ApplyService } from '../apply.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
   
 
  policies : any;
  username:string | undefined;
  approvalsModel :any | undefined;
  constructor(private http:HttpClient,private usernameService:UsernameService,private applyService:ApplyService) { }

  ngOnInit() {

   
  let responce =  this.http.get('http://localhost:9091/api/v1/policies');
  responce.subscribe((data)=>this.policies=data);
  this.username = this.usernameService.getUsername();
  console.log(this.username);

  }

 show(policy:any){
  var userName:string | undefined;
  var policyId:string;
  userName = this.username!;
  policyId = policy;
  console.log(userName,policyId);
  this.approvalsModel = new Approvals(policyId,userName);
  this.applyService.apply(this.approvalsModel).subscribe(data => console.log('succses', data),error => console.error('error', error))
  alert('Applied') 
 }

}
