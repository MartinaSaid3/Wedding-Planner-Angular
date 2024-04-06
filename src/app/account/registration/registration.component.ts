//import { CdkStepper } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import { User } from '../../_modules/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  //flag
  isLoading:boolean=false;

  //forms
  RoleForm!: FormGroup;
  PersonalDataForm!: FormGroup;
  ConfirmMailForm!: FormGroup;
  user:User = new User("","","","","","","","","","" );

  constructor(private _Router:Router, private _formBuilder: FormBuilder,private _authService:AuthService) { }

    ngOnInit() {

      this.RoleForm = this._formBuilder.group({
        FullName: ["",Validators.compose([Validators.required,Validators.minLength(5)])],
        Role: ["", Validators.required]
      });
      this.PersonalDataForm = this._formBuilder.group({
          SSN: ["", Validators.compose([Validators.required,Validators.pattern(/[0-9]{14,15}/)])],
          Gender: ["", Validators.required],
          Phone: ["", Validators.compose([Validators.required,Validators.pattern(/^((\\+20-?)|0)?[0-9]{10}$/)])],
          Address: ["", Validators.compose([Validators.required,Validators.pattern(/^[0-9A-Za-z\s,.'-]{3,}$/)])]
      });
      this.ConfirmMailForm = this._formBuilder.group({
        Email: ["",  Validators.compose([Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
        UserName: ["", Validators.compose([Validators.required,Validators.pattern(/^[A-z0-9_-]{8,15}$/)])],
        Password: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])],
        ConfirmPassword: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])]
      });
    }

error:string ='';

  Submit(){
    this.isLoading=true;
    console.log(this.user);
    this._authService.signup(this.user).subscribe({
      next:(response)=>{
        this.isLoading=false;
        if(response.message === 'success'){
          this._Router.navigate(['/account/login']);
          //this._Router.navigate(['/https://mail.google.com/mail/u/0/']);

        }else{
          this.error = 'This UserName Exist';
        }
      },
      error: (error) => {
        this.isLoading=false;
        console.error('Error during signup:', error);
        this.error = 'An error occurred during signup.';
      }
    });
  }
}
