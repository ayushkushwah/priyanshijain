import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
export interface Food {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name: String;
  id:string;
  public responseData1: any;
  public responseData2: any;
  users;

  

  constructor(private route: ActivatedRoute, private DataService: DataService) { }
  trackByFn(index, item) {
    return item.id;
  }
  
  ngOnInit() {
    this.name= this.route.snapshot.paramMap.get("name")
    this.id= this.route.snapshot.paramMap.get("id")
    this.getUsers();
    //this.Users();
    // this.Users()
  }

  getUsers() {
    this.DataService.getUsers().subscribe(
      users => {
        // console.log(data[0].name);
        // this.name = data[0].name;
        this.users = users;
      },
      err => {
        console.log(err);
      }
    );
  }

  // Users() {
  //   this.DataService.postusers().subscribe(
  //     response => {
  //       console.log(response)
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

}
