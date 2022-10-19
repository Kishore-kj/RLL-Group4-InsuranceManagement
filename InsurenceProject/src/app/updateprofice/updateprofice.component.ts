import { Component, OnInit } from '@angular/core';
import { updateModel } from '../updateModel';
import { UpdateService } from '../update.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updateprofice',
  templateUrl: './updateprofice.component.html',
  styleUrls: ['./updateprofice.component.css']
})
export class UpdateproficeComponent implements OnInit {

  updateModel = new updateModel('','','','','');

  constructor(private updateService:UpdateService,private route:Router) { }

  ngOnInit(): void {
  }
    onSubmit(){
      alert("Updated SuccessFully");
      this.updateService.enroll(this.updateModel).subscribe(data => console.log('succses', data),error => console.error('error', error))
   
    }
  }


