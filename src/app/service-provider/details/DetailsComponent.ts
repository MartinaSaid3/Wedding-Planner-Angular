import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ServiceProviderService } from '../../services/service-provider.service';
import { ServiceProvider } from '../../_modules/service-provider';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnChanges{
  @Input() ID: number = 0;
  @Input() cli: ServiceProvider|null = null;
  @Output() onhide: EventEmitter<boolean> = new EventEmitter<boolean>();
  hide() {
    this.onhide.emit(false);
  }
  constructor(public serv: ServiceProviderService) {
  }
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.cli = this.serv.getServiceProvider(this.ID);
  // }

  ngOnChanges(): void {
    this.cli = this.serv.getServiceProvider(this.ID);
  }
}
