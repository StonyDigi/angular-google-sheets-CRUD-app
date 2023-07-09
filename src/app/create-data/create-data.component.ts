import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SheetService } from '../services/sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {
  googleSheetForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
     private service: SheetService,
      private router: Router) {
        
        this.googleSheetForm = this.formBuilder.group({
          name: formBuilder.control(''),
          platform: formBuilder.control(''),
          technology: formBuilder.control(''),
          link: formBuilder.control(''),
        })
  }
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.googleSheetForm.value);
    const name = this.googleSheetForm.value.name
    const platform = this.googleSheetForm.value.platform
    const technology = this.googleSheetForm.value.technology
    const link = this.googleSheetForm.value.link

    this.service.createSheet(name, platform, technology, link).subscribe({
     next: (res) => {
      console.log(res);
      if (res) {
        this.router.navigate(['/list'])
      }
     },
     error: (error) => {
      console.log(error);
     } 
    })
  }
}