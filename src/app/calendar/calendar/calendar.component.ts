import { Component, OnInit } from '@angular/core';
import { DayComponent } from "../day/day.component";
// import { Day } from "../day";
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  days: String[] = [];
  times: TimeRanges[] = [];

  constructor() {
    this.getCurrentWeek();
    this.someFunction();
  }

  ngOnInit(): void {
  }

  getCurrentWeek() {
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf('isoWeek');

    for (var i = 0; i <= 6; i++) {
      this.days.push(
        moment(weekStart).add(i, 'days').format("yyyy/M/D")
      );
    }
  }

  someFunction () {
    var items: String[] = [];
    new Array(24).fill(undefined).forEach((acc, index) => {
      items.push(moment( {hour: index} ).format('h:mm A'));
      items.push(moment({ hour: index, minute: 30 }).format('h:mm A'));
    })
    console.log(items);
    // return items;
  }

}
