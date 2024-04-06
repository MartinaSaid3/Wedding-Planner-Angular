import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../_modules/reservation';

@Injectable({
  providedIn: 'root'
})
export class HallsService {

  constructor(private _http:HttpClient) { }

  getAllHalls():Observable<any>{
    return this._http.get(`https://localhost:44339/api/Venues`);
  }
  getSpecialHalls(city:string):Observable<any>{
    return this._http.get(`https://localhost:44339/api/Venues/${city}`);
  }
  getHallsPrice(price:number):Observable<any>{
    return this._http.get(`https://localhost:44339/api/Venues/price/${price}`);
  }

  getHallsById(id:number):Observable<any>{
    return this._http.get(`https://localhost:44339/api/Venues/${id}`);
  }
  getTotalPriceById(id:number,service:string,numofGuests:number):Observable<any>{
    return this._http.get(`https://localhost:44339/${id}/${service}/${numofGuests}`);
  }
  ReservationHall(reservation:Reservation):Observable<any>{
    return this._http.post<Reservation>(`https://localhost:44339/api/Venues`,reservation);
  }
}
