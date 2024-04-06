import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { last } from 'rxjs';
import { HallsService } from '../../services/halls.service';
import { Halls } from '../../_modules/halls';

@Component({
  selector: 'app-hall-details',
  templateUrl: './hall-details.component.html',
  styleUrl: './hall-details.component.css'
})
export class HallDetailsComponent implements OnInit, AfterViewInit{

  guestsnum!:number;
  service!:string;
  flage:boolean=false;

  thisHall:Halls|null=null;
  totalPrice:number|null=null;

  zoom = 12;

  constructor(private _Route:Router,private _hall:HallsService , private _active:ActivatedRoute){}
  g:any;
  ngAfterViewInit(): void {
    this.g=new google.maps.Geocoder();
  }

    center: google.maps.LatLngLiteral={lat:26.651385,lng:15.826474};
    options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    styles:[
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
      },
      {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
      },
      {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
      },
      {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
      },
      {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
      },
      {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
      },
      {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
      },
      {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
      },
      {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
      },
      {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
      },
      {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
      },
      {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
      },
      {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
      },
      {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
      },
      {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
      },
  ],
}
 marker={
  position: {
    lat: this.center.lat,
    lng: this.center.lng,
  },
  label: {
    color: 'red',
    text: 'Marker label ',
  },
  title: 'Galaxy holl ',
  options: { animation: google.maps.Animation.BOUNCE },
};


ngOnInit(): void  {
  // navigator.geolocation.getCurrentPosition(() => {
  //   this.center = {
  //     lat: this.center.lat,
  //     lng: this.center.lng
  //     // lng: position.coords.longitude,
  //   };
  // });
  let { id } = this._active.snapshot.params;
  this._hall.getHallsById(id).subscribe({
    next:(data)=>{
      this.thisHall = data;
    },
    error:(error)=>{
      console.log(error);
    }
  })
  const locationString:string = this.thisHall?.location || ''; // Example location string

  setTimeout(()=>{
    this.geocodeLocation(locationString);
  },1000);
}

geocodeLocation(location: string): void {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: location.split(',')[0] }, (results: any, status: any) => {
    if (status === 'OK') {
      const { lat, lng } = results[0].geometry.location;

      // Now you have latitude and longitude, you can place a marker on the map
      this.placeMarker(lat(), lng());
    } else {
      console.error('Geocode was not successful for the following reason:', status);
    }
  });
}

placeMarker(lat: number, lng: number): void {
  this.marker.position = { lat, lng };
  console.log(this.marker.position);
}

getTotalPrice(){
  let { id } = this._active.snapshot.params;
  this._hall.getTotalPriceById(id,this.service,this.guestsnum).subscribe({
    next:(data)=>{
      this.totalPrice = data;
    },
    error:(error)=>{
      console.log(error);
    }
  })
  this.flage=true;
}

  zoomIn() {
    if (this.zoom < 12) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > 8) this.zoom--;
  }

  Reserve(){
    let { id } = this._active.snapshot.params;
    this._Route.navigate(['/client/Reservation',id]);
  }
}
