import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../_modules/account';
import { AuthService } from '../../services/auth.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent {
  //flag
  isLoading:boolean=false;
  islogin:boolean=true;
  //forms
  Reset!: FormGroup;
  Token!:string;

  constructor(private _active:ActivatedRoute,private _Router:Router, private _formBuilder: FormBuilder,private _authService:AuthService) { }

    ngOnInit() {

      this._active.queryParams.subscribe(params =>{
        this.Token = params['token'];
        console.log(params);
      });

      this.Reset = this._formBuilder.group({
        UserName: ["", Validators.compose([Validators.required,Validators.pattern(/^[A-z0-9_-]{8,15}$/)])],
        token: [this.Token],
        New_Password: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])],
        Confirm_Password: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])],
      });
    }

error:string ='';

ResetPass(v:object){
    this.isLoading=true;
    console.log(v);
    this._authService.ResetPassword(v).subscribe({
      next:(response)=>{
        this.isLoading=false;
        console.log(response);
        if(response != null){
          this._Router.navigate(['/account/login']);
        }else{
          this.error = 'This reset Faild :';
        }
      },
      error: (error) => {
        this.isLoading=false;
        console.error(error);
        console.error('This reset Faild', error);
        this.error = 'This reset Faild';
      }
    });
  }
}
