import { Component, OnInit } from '@angular/core';
import { SheetService } from '../services/sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  data: any = [];

  constructor(private service: SheetService, private router: Router) {}
    
    ngOnInit() {
      this.listData();
    }

    listData() {
      this.service.listSheet().subscribe({
        next: (res) => {
          console.log(res);
          this.data = res
        },
        error: (err) => {
          console.log(err);
        }
      }) 
    }

    editSheet(id: any) {
      console.log(id)
      this.router.navigate([`/edit/${id}`]);
    }

    deleteSheet(index: any) {
      console.log(index)
      this.service.deleteSheet(index).subscribe({
        next: (res) => {
          this.listData()
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
}
