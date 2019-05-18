import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //console.log('priyanshi here');
  }

  firstClick() {
    this.router.navigate(['home', 'about', 'priyanshi']);
  }
}
