import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  login() {
    //Code for login goes here
    this.router.navigate(['/home']);
  }

  register() {
    this.router.navigate(['/register']);
  }

}
