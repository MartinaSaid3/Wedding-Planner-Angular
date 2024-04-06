import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HallsService } from '../../services/halls.service';
import { Halls } from '../../_modules/halls';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent implements OnInit{
  @ViewChild('widgetsContent') widgetsContent!: ElementRef ;
  constructor(private _hall:HallsService){}
  Halls!: Halls[];
  //AllHalls!:Halls[];

  location!:string;
  price!:number;
  flag:boolean=true;

  ngOnInit():void{
  this._hall.getAllHalls().subscribe({
    next:(data)=>{
      this.Halls = data;
      console.log(this.Halls);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  priceFilter(price:number){
    this._hall.getHallsPrice(price).subscribe({
      next:(data)=>{
        if(data){
          this.Halls = data;
          console.log(this.Halls);
        }else{
          console.log("no Data");
        }
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  LocationFilter(location:string){
    if(location != 'All'){
      this._hall.getSpecialHalls(location).subscribe({
        next:(data)=>{
          if(data){
            this.Halls = data;
            console.log(this.Halls);
          }else{
            console.log("no Data");
          }
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }else{
      this._hall.getAllHalls().subscribe({
        next:(data)=>{
          this.Halls = data;
          },
          error:(error)=>{
            console.log(error);
          }
        })
    }
  }
  scrollLeft(){
    if (this.widgetsContent) {
      this.widgetsContent.nativeElement.scrollLeft -= 150;
    }

  }

  scrollRight(){
    if (this.widgetsContent) {
      this.widgetsContent.nativeElement.scrollLeft += 150;
    }
  }






  // name = 'Angular';
  // imageObject = [{
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
  //     title: 'Hummingbirds are amazing creatures'
  // }, {
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  // }, {
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
  //     title: 'Example with title.'
  // },{
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
  //     title: 'Hummingbirds are amazing creatures'
  // }, {
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  // }, {
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
  //     title: 'Example two with title.'
  // }];


// showAll(){
//   this._http.getHalls('All').subscribe({
//     next:(data)=>{
//       this.imageObject = data.results;
//     }
//   })
// }

// showHalls(location:string){
//   this._http.getHalls(location).subscribe({
//     next:(data)=>{
//       this.imageObject = data.results;
//     }
//   })
//  }
}
