import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  //Form Validables 
  loginForm: any = FormGroup;
  submitted = false;
  loading!: boolean;
  showMsg: boolean = false;
  message: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }
  get f() { return this.loginForm.controls; }

  ngOnInit() {
    history.pushState(null, '');
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.userService.login(this.loginForm.value).subscribe({
        next: () => {
          this.router.navigateByUrl("/userList");
          history.pushState(null, '');

        },
        error: (err) => {
          console.log(err.error.message);
          this.loading = false;
          this.showMsg = true;
          this.message = err.error.message
          setTimeout(() => {
            this.showMsg = false;
          }, 5000);
        },
      })
    }

  }

  action() {
    this.router.navigateByUrl(`/createUser`);
  }
}
