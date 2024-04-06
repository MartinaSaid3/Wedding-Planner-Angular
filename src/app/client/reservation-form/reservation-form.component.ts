import { Reservation } from './../../_modules/reservation';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { DateFilterFn } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { HallsService } from '../../services/halls.service';
import { Halls } from '../../_modules/halls';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{
  errMsg: string = '';
  isloading: boolean = false;
  ReservationForm!: FormGroup;

  thisHall:Halls|null=null;

  //ReservationForm!: FormGroup;
  constructor(private _Router:Router,private _hall:HallsService,private _active:ActivatedRoute, private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    let { id } = this._active.snapshot.params;
    console.log(id);
    this.ReservationForm = this._formBuilder.group({
      venueId: ["",Validators.compose([Validators.required])],
      date: ["", Validators.required],
      numOfGuests: ["",Validators.compose([Validators.required,Validators.min(0),Validators.max(0)])],
      specialRequest: ["", Validators.required],
      services : ["", Validators.required],
      email : ["",  Validators.compose([Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
    });

    this._hall.getHallsById(id).subscribe({
      next:(data)=>{
        this.thisHall = data;
        console.log(this.thisHall?.name);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
     isDateDisabled: DateFilterFn<Date|null> = (date: Date|null): boolean => {
    // console.log(this.thisHall?.reservationDates);
    //   // Add logic to disable specific dates
    //   return date?.getDay() !== this.thisHall?.reservationDates; // Disable Sundays as an example
    if (!date || !this.thisHall?.reservationDates) {
      return false; // If date or reservationDates array is null, consider date as enabled
    }

    const disabledDates = this.thisHall.reservationDates;

    // Check if the given date matches any date in the reservationDates array
    return disabledDates.some(disabledDate => {
      // Customize the comparison based on your specific requirements
      return date.getTime() === disabledDate.getTime();
    });
    }

     Reservation(reserve:Reservation):void{
      this._hall.ReservationHall(reserve).subscribe({
        next:(response)=>{
          if(response!=null){
            this._Router.navigate(['/home']);
          }else{
            console.log("ERRor")
          }
        },
        error:(error)=>{
          console.log(error)
        }
      })
     }
}
