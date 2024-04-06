import { Component ,Input, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ScrollServiceService } from '../../services/scroll-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  // @Input()
  isLogIn:boolean = false;

  @Input() hidde:boolean=true;
  constructor(private _auth:AuthService,private scrollService: ScrollServiceService){}
  logout(){
    this._auth.logout();
  }
  ngOnInit(): void {
    this._auth.userData.subscribe({
      next:()=>{
        if(this._auth.userData.getValue() != null )
        {
          this.isLogIn=true;
        }
        else
        {
          this.isLogIn=false;
        }
      }
    })
  }
  onNavLinkClick(sectionId: string) {
    this.scrollService.scrollEvent.emit(sectionId);
  }
}
