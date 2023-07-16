import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public userData: any = []
  constructor(private userService: UserService, private router: Router,) {
  }


  ngOnInit(): void {
    history.pushState(null, '');
    this.userService.getAllUser().subscribe(emp => {
      history.pushState(null, '');
      this.userData = emp
    })

  }


}
