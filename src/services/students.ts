

import {Injectable} from "@angular/core";
import * as _ from "lodash";

@Injectable()
export class StudentService {

  students: any = [];

  constructor() {

  }

  addStudent(s){
    s.id = this.randId();
    this.students.push(s);
  }

  removeStudent(s){
    _.remove(this.students, function(n) {
      return n.id  == s.id;
    });
  }

  getStudents() {
    return this.students;
  }

  randId() {
    return Math.random().toString(36).substr(2, 10);
  }
}
