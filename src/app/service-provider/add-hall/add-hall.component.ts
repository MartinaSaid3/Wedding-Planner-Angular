import { Component, ViewChild } from '@angular/core';
import { ServiceProviderRequest } from '../../_modules/service-provider-request';
// import { MatPaginator , MatSort , MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrl: './add-hall.component.css'
})
export class AddHallComponent {
  UserName:string = 'omnia';
  displayedColumns = ['id', 'name', 'progress', 'color'];

  constructor() {
  }

}
