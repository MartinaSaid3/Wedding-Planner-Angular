 import { ServiceProviderService } from './../../services/service-provider.service';
import { Component, OnInit } from '@angular/core';
//import { Client } from '../../_modules/client';
import { ServiceProvider } from '../../_modules/service-provider';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})

export class RequestsComponent implements OnInit{
  //ServiceProviders:ServiceProviderService=new ServiceProviderService();
  ID:number=1;

  providersData:ServiceProvider[]=[];
  constructor(public serv:ServiceProviderService){
  }

  ngOnInit(): void {
    this.providersData = this.serv.getAll();
  }

  client:ServiceProvider|null = null;
  status:boolean = false;


  show(id:number){
    id = this.ID;
    // for(let i = 0; i < this.providersData.length ; i++){
    //   if(id == this.providersData[i].id){
    //      this.client = this.providersData[i];
    //   }
    // }
    this.client=this.serv.getServiceProvider(id)
    this.status=true;
  }
}
