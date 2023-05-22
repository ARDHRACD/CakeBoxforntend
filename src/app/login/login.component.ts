import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { CakeService } from '../services/cake.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })
  get username(){
    return this.loginForm.get("username")
  }
  get password(){
    return this.loginForm.get("password")
  }
  constructor(private router:Router,private service:CakeService){}
  savelogin(){
    if(this.loginForm.valid){
      let formData=this.loginForm.value
      this.service.getToken(formData).subscribe((res:any)=>localStorage.setItem("token","Token "+res.token))
      this.router.navigateByUrl("cakes")
      
    }
  }
}
