import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { policies } from '../policies';
import { PolicyService } from '../policy.service';
import { UpdatepolicyService } from '../updatepolicy.service';

@Component({
  selector: 'app-updatepolicies',
  templateUrl: './updatepolicies.component.html',
  styleUrls: ['./updatepolicies.component.css']
})
export class UpdatepoliciesComponent implements OnInit {
  policies = new policies('','','','');
  constructor(private activeRouter:ActivatedRoute,private _updatepolicyService:UpdatepolicyService) { }
  ngOnInit(): void {
  }
  

  onSubmit(){
    alert("Updated SuccessFully");
    this._updatepolicyService.enroll(this.policies).subscribe(data => console.log('succses', data),error => console.error('error', error))
     
  
  }


}
