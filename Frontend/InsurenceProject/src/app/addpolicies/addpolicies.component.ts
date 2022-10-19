import { Component, OnInit } from '@angular/core';
import { policies } from '../policies';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-addpolicies',
  templateUrl: './addpolicies.component.html',
  styleUrls: ['./addpolicies.component.css']
})
export class AddpoliciesComponent implements OnInit {

  constructor(private _addpolicyService:PolicyService) { }

  addpoliciesModel = new policies('','','','');

  ngOnInit(): void {
  }
  onSubmit(){
    alert("Added Successful");
    this._addpolicyService.addpolicy(this.addpoliciesModel)
    .subscribe(
      data => console.log('success',data),
      error => console.error('error',error)
    )
  }
}
