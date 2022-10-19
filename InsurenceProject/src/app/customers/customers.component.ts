import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApprovedModel } from 'src/approvedModel';
import { ApprovedService } from '../approved.service';
import { Disapprovals } from './Disapproved';
import { DisapprovedService } from '../disapproved.service';
import { DeleteapprovalService } from '../deleteapproval.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
 
  show : boolean=true;
  approved: boolean = false;
  disapproved: boolean = false;
  approvedModel :any | undefined;
  disapprovedModel :any | undefined;

  books : any;

  constructor(private http:HttpClient,private approvedService : ApprovedService,private disapprovedService:DisapprovedService,private deletePolicy:DeleteapprovalService) { }

  ngOnInit(): void {

    let responce =  this.http.get('http://localhost:9091/api/v1/approvals');
    responce.subscribe((data)=>this.books=data);
 
  }
  approve(userName:any,policyId:any){
    this.show=!this.show;
    this.approved = !this.approved; 
    this.approvedModel = new ApprovedModel(policyId,userName) ;
    console.log(this.approvedModel);
    this.approvedService.approved(this.approvedModel).subscribe(data => console.log('succses', data),error => console.error('error', error))
    this.deletePolicy.deleteapproval(userName).subscribe(data => console.log('succses', data),error => console.error('error', error))  
    alert('Approved Succesfully')
  }
  disapprove(userName:any,policyId:any){
   this.show =!this.show;
   this.disapproved = !this.disapproved;
   this.disapprovedModel = new Disapprovals(policyId,userName) ;
   this.disapprovedService.disapproved(this.disapprovedModel).subscribe(data => console.log('succses', data),error => console.error('error', error))
   this.deletePolicy.deleteapproval(userName).subscribe(data => console.log('succses', data),error => console.error('error', error))  
   alert('Dispproved Succesfully')
  }


}
