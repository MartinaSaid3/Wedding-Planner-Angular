import { Component } from '@angular/core';
import { ScrollServiceService } from '../../services/scroll-service.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.css'
})
export class HomeBodyComponent {
  constructor(private scrollService: ScrollServiceService) {}
  ngOnInit() {
    this.scrollService.scrollEvent.subscribe(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
