import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { TranslationWidth } from '@angular/common';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new User()
   msg="";
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
    
  }
  loginUser(){
    console.log("hiiiiiiiiiiiii");
    
    this._service.loginUserFromRemote(this.user).subscribe(
      data=> {
        console.log("response received");
      this._router.navigate(["/loginSuccess"])

             },
      error=>
      {
        console.log("exception occured");
        this.msg="bad credentials , please  enter valid emailid and password";

      }
    )


  }
  gotoRegistration()
  {
    this._router.navigate(["/registration"]);
  }

}
