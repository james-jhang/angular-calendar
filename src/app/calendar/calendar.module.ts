import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';

import { CalendarRoutingModule } from "./calendar-routing.module";

@NgModule({
  declarations: [
    CalendarComponent,
    DayComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
