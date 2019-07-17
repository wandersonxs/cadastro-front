import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {LoginResponse} from './login-response';



@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements  OnInit {

    @ViewChild('f') loginForm: NgForm;
    @ViewChild('email') email: ElementRef;

    inputEmail: string;
    inputPass: string;
    hiddenErrorMessage: boolean = true;
  token: string;
  private loginResponse: any;

    constructor(private router: Router,
                private route: ActivatedRoute, private authService: AuthService) { }

    ngOnInit() {
        this.email.nativeElement.focus();
        const access_token = localStorage.getItem('access_token');
        if (access_token != null) {
            this.router.navigate(['/pessoas']);
        }
    }

    // On submit button click
    // onSubmit() {
       //  this.authService.signinUser(this.inputEmail, this.inputPass);
    // }

   onSubmit() {
    this.authService.signinUser(this.inputEmail, this.inputPass)
      .subscribe((data) => {
          this.token = data.token;
          localStorage.setItem('access_token', this.token);
        },
        response => {
          this.hiddenErrorMessage = false;
        },
        () => {
          this.router.navigate(['pessoas']);
        });
  }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['/forgotpassword']);
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['/register']);
    }


}
