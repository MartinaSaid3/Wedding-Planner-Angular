import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent {
  errMsg: string = '';
  isloading: boolean = false;
  selectedImages: { file: File, url: string }[] = [];

    hallform: FormGroup = new FormGroup({
    Name: new FormControl(''),
    Location: new FormControl(''),
    MaxCapacity: new FormControl(''),
    MinCapacity:new FormControl(''),
  Description: new FormControl(''),
    OpenBuffet:new FormControl(''),
    SetMenue:new FormControl(''),
    HighTea:new FormControl(''),
    PriceOpenBuffetPerPerson:new FormControl(''),
    PriceSetMenuePerPerson:new FormControl(''),
    PriceHighTeaPerPerson:new FormControl(''),
    
    ImagesData: new FormControl([]) // Initialize Images FormControl as an empty array
  });

  constructor(private _provider: ProviderService,private _formBuilder:FormBuilder) {}
  // ngOnInit(): void {
  //   this.hallform = this._formBuilder.group({
  //     Name: ["",Validators.compose([Validators.required])],
  //     Location: ["", Validators.required],
  //     MaxCapacity:  ["", Validators.required],
  //     MinCapacity:  ["", Validators.required],
  //     PersonalPrice :  ["", Validators.required],
  //     Description: ["", Validators.required],
  //     ImagesData: ["", Validators.required],
  //     OpenBuffet:["", Validators.required],
  //     SetMenue:["", Validators.required],
  //     HighTea:["", Validators.required],
  //     PriceOpenBuffetPerPerson:["", Validators.required],
  //     PriceSetMenuePerPerson:["", Validators.required],
  //     PriceHighTeaPerPerson:["", Validators.required],
  //   });
  // }

 


  handleform(): void {
    this.isloading = true;
    if (this.hallform.valid) {
      const formData = new FormData();
      // Append form values excluding ImagesData
      Object.entries(this.hallform.value).forEach(([key, value]: [string, any]) => {
        if (key !== 'ImagesData') {
          formData.append(key, value);
        }
      });
      // Append Image files directly as IFormFile
      this.selectedImages.forEach((image, index) => {
        formData.append('ImagesData', image.file); // Note: 'ImagesData' is not indexed
      });
      // Send form data to the server
      this._provider.hall(formData).subscribe({
        next: (response) => {
          this.isloading = false;
          console.log(response.message);
        },
        error: (err) => {
          this.errMsg = err.error.message;
          console.log(err);
          this.isloading = false;
        }
      });
    }
  }

  onFileSelected(event: any): void {
      const files: FileList = event.target.files;
      if (files && files.length > 0) {
          this.selectedImages = [];
          for (let i = 0; i < files.length; i++) {
              const file = files.item(i)!;
              this.selectedImages.push({ file, url: URL.createObjectURL(file) });
          }
      }
  }
}


