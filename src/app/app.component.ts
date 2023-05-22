import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cakeBox';
  isAuthenticated=false
  constructor(){
    if("token" in localStorage){
      this.isAuthenticated=true
    }
  }
}
