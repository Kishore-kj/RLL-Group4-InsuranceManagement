import { Component, OnInit } from '@angular/core';
import { AuthenticationStatus } from '../AuthenticationStatus.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { admin } from '../admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  adminModel = new admin('',''); 
  authStatus: AuthenticationStatus | undefined;
 
  constructor(
    private loginService: AdminServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { }
  onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.password);

    this.loginService
    .authenticated(form.value.username, form.value.password)
    .subscribe((res) => {
      this.authStatus = res;
      if (this.authStatus.authenticated) {
        alert("Successfully logged in!")
        this.router.navigate(['/adminhome'], { relativeTo: this.route});
      }
      else {
        alert("Invalid Credentials!")
        form.reset();
      }
    });
  }


}
