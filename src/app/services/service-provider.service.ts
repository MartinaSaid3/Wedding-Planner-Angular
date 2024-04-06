import { Injectable } from '@angular/core';
import { ServiceProvider } from '../_modules/service-provider';
import { Client } from '../_modules/client';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  serviceProvider:ServiceProvider[]=[]
  constructor() {
    this.serviceProvider=[
      new ServiceProvider(1,"omnia","admin"),
      new ServiceProvider(2,"nada","admin"),
      new ServiceProvider(3,"abdo","admin"),
      new ServiceProvider(4,"omnia","admin"),
      new ServiceProvider(5,"omnia","admin"),
    ]
  }

  getAll(){
    return this.serviceProvider;
  }

  getServiceProvider(id:number):ServiceProvider|null{
    for(let i =0 ; i < this.serviceProvider.length;i++){
      if(id == this.serviceProvider[i].id){
        return this.serviceProvider[i];
      }
    }
    return null;
  }
}

