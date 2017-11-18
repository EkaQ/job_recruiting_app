

import {Injectable} from "@angular/core";
import * as _ from "lodash";

@Injectable()
export class DateService {

  dates: any = [];

  constructor() {

  }

  addDate(d){
    d.id = this.randId();
    this.dates.push(d);
  }

  removeDate(s){
    _.remove(this.dates, function(n) {
      return n.id  == s.id;
    });
  }

  getDates() {
    return this.dates;
  }

  randId() {
    return Math.random().toString(36).substr(2, 20);
  }
}
