import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 userModel = new User('','','','','');

 constructor( private _enrollmentService : EnrollmentService,private route:Router){}

  ngOnInit(): void {

  }
  onSubmit(){
    alert("Registered SuccessFully");
    this._enrollmentService.enroll(this.userModel).subscribe(data => console.log('succses', data),error => console.error('error', error))
    this.route.navigate(['/login']);
  }

}
