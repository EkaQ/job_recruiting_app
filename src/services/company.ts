import {Injectable} from "@angular/core";
import * as _ from "lodash";

@Injectable()
export class CompanyService {

  companies: any = [];

  constructor() {

  }

  addCompany(c){
    c.id = this.randId();
    this.companies.push(c);
  }

  removeCompany(c){
    _.remove(this.companies, function(n) {
      return n.id  == c.id;
    });
  }

  getCompanies() {
    return this.companies;
  }

  randId() {
    return Math.random().toString(36).substr(2, 10);
  }
}
