import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Queries } from '../queries.model';
import { SendqueryService } from '../sendquery.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  queriesModel = new Queries('','','','');
 constructor(private _sendqueryService : SendqueryService ,private route:Router) { }

 
 // sendqueryModel = new queries('','','','');
  ngOnInit(): void {
  }
 onSubmit(){
   alert('Thankyou');
   this._sendqueryService.putquery(this.queriesModel).subscribe(data => console.log('succses', data),error => console.error('error', error))
   this.route.navigate(['/contact']);
 }
}
