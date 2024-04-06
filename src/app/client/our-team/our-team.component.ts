import { Component } from '@angular/core';
import { Member } from '../../_modules/member';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {
  Members:Member[]=[
    new Member("Bassant","Full-Stack .Net Developer","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, neque.","../../../assets/img/basant.png","","","",""),
    new Member("Martina","Full-Stack .Net Developer","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, neque.","../../../assets/img/martina.png","","","",""),
    new Member("Menna","Full-Stack .Net Developer","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, neque.","../../../assets/img/menna2.png","","","",""),
    new Member("Nourhan","Full-Stack .Net Developer","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, neque.","../../../assets/img/noura.png","","","",""),
    new Member("Omar","Full-Stack .Net Developer","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, neque.","../../../assets/img/omar2.png","","","",""),
    new Member("Omnia","Full-Stack .Net Developer","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, neque.","../../../assets/img/omnia.jpg","","","",""),
  ]
}
