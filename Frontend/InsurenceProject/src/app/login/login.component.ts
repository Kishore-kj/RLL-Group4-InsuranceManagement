import { Component, OnInit } from '@angular/core';
import { AuthenticationStatus } from '../AuthenticationStatus.model';
import { LoginService } from '../login.service';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsernameService } from '../username.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authStatus: AuthenticationStatus | undefined;
  loginModel = new Login('','');
 
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private usernameService:UsernameService
  ) { }

  ngOnInit(): void { }
  onSubmit(form: NgForm) {
    console.log(form.value.userName, form.value.password);

    this.loginService
    .authenticated(form.value.userName, form.value.password)
    .subscribe((res) => {
      this.authStatus = res;
      if (this.authStatus.authenticated) {
        this.usernameService.setUsername(res.userName);
        alert("Successfully logged in!")
        this.router.navigate(['/user'], { relativeTo: this.route});
      }
      else {
        alert("Invalid Credentials!")
        form.reset();
      }
    });
  }


}
