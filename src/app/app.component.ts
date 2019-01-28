import { Component } from '@angular/core';
import {DatepickerOptions} from '../ng-datepicker/component/ng-datepicker.component';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';
import * as esLocale from 'date-fns/locale/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: Date;
  options: DatepickerOptions = {
    locale: enLocale,
    minDate: new Date(Date.now() - 100000000),
    blockDaysOfWeek: [0, 6],
    blockDays: ['2019-01-30']
  };
  constructor() {
    this.date = new Date();
  }
}
