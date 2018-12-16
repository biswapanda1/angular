import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
  }
  title = 'Flipkart';
  ngOnInit(){
  }
  showLoginScreen(){
    console.log("inside show login");
   
  }
}
