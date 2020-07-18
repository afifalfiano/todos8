import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todos8';
  // time = moment;

  dateNow;

  constructor() {
    // this.dateNow = this.time();
    this.dateNow = 'Test';

  }
  ngOnInit(): void {

  }
}
