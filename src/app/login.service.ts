import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getLoginCred(){
    console.log("inside login service");
  }
}
