import { User } from './../../_modules/user';
import { Component } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Account } from '../../_modules/account';
import { jwtDecode, JwtPayload } from "jwt-decode";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //flag
  isLoading:boolean=false;
  islogin:boolean=true;
  //forms
  LogInForm!: FormGroup;

  username!:string;
  pass!:string;

  AccountData!:Account;

  constructor(private _Router:Router, private _formBuilder: FormBuilder,private _authService:AuthService) { }

    ngOnInit() {

      this.LogInForm = this._formBuilder.group({
        UserName: ["", Validators.compose([Validators.required,Validators.pattern(/^[A-z0-9_-]{8,15}$/)])],
        Password: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])],
      });
    }

error:string ='';

  // SubmitLogIn(v:Account){
  //   this.isLoading=true;
  //   console.log(v);
  //   this._authService.login(v).subscribe({
  //     next:(response)=>{
  //       this.isLoading=false;
  //       console.log(response);
  //       if(response.data != null){

  //         localStorage.setItem('userToken',response.data);
  //         this._authService.saveUserData();
  //         this._Router.navigate(['/home']);

  //       }else{
  //         this.error = 'This UserName Exist';
  //       }
  //     },
  //     error: (error) => {
  //       this.isLoading=false;
  //       console.error(error);
  //       console.error('This UserName Not Exist :', error);
  //       this.error = 'This UserName Not Exist';
  //     }
  //   });
  // }

  SubmitLogIn(v:Account){
    
    this.isLoading=true;
   console.log(v);
   this._authService.login(v).subscribe({
     next:(Response)=>{
      this.isLoading=false;
     if(Response.data !=null){

      
         localStorage.setItem('userToken',Response.data);
          this._authService.saveUserData();
        this._Router.navigate(['/home']); //,this.islogin
       //this._Router.navigate(['/https://mail.google.com/mail/u/0/']);

       }else{
        this.error = 'Invalid username or password';
        }
      },
      error: (error) => {
       this.isLoading=false;
       console.error('Error during Log In:', error);
        this.error = 'An error occurred during LogIn.';
    }
    });
  }





  forget(){
    this.AccountData.UserName = this.username;
    this.AccountData.Password = this.pass;
    this._authService.forgetPassword(this.AccountData).subscribe({
      next:(response)=>{
        if(response){
          console.log(response);
        }else{
          console.log("not found");
        }
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
