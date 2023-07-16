import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent {
  createUserForm: any = FormGroup;
  submitted = false;
  loading!: boolean;
  showMsg: boolean = false;
  message: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  get f() { return this.createUserForm.controls; }

  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      isActive: ['0']
    });
  }

  onSubmit() {

    this.submitted = true;
    if (this.createUserForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.userService.createUser(this.createUserForm.value).subscribe({
        next: () => {
          this.router.navigateByUrl("/login");
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
          this.showMsg= true;
          this.message = err.error.message
          setTimeout(() => {
            this.showMsg = false;
          }, 5000);
          this.router.navigateByUrl(`/createUser`);
        },
      })
    }

  }
}
