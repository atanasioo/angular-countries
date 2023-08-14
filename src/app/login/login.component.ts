import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private authsvc : AuthService, private router : Router){
  }
  FakeLogin(){
    this.authsvc.isLoggedIn = true
    this.router.navigate([''])
  }
}
