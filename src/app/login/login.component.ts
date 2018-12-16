import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, private loginService: LoginService) { }
  isLogin:boolean;
  ngOnInit() {
  }
  username:string;
  password:string;
  error:string;
  login(e){
    console.log("Inside Login");
    if(this.username == null){
    this.error="Please enter username";
    }else if(this.password == null){
      this.error="Please enter password";
    }
    this.loginService.getLoginCred();
    //this.router.navigate(['/home']);
    this.isLogin=true;
  }
}
