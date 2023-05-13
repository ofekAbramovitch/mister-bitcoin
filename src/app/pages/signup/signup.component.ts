import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user!: User

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getEmptyUser()
  }

  onLogin(form: NgForm) {
    if (this.user.name.length < 2) return
    this.userService.login(this.user)
    this.router.navigateByUrl('/')
  }
}
