import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
  })

export class AppComponent implements OnInit {

  input;
  

  constructor(private userService: UserService ) {

  }
  ngOnInit() {
    this.input = {
      username:"",
      password:"",
      email:""
    };
  }
  onRegister(){
    this.userService.registerNewUser(this.input).subscribe(
  	response => {
  		alert('User '+ this.input.username + 'has been created !');
  	},
    error =>{
     console.log('error',error);
    }
    );
  }

  onLogin(){
    this.userService.loginUser(this.input).subscribe(
  	response => {
      console.log(response);
  		alert('User '+ this.input.username + ' logged. ');
  	},
    error =>{
     console.log('error',error);
    }
    );
  }
}

