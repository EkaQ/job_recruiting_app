import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DateService} from "../../services/date";

/**
 * Generated class for the DatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dates',
  templateUrl: 'dates.html',
})
export class DatesPage {

  dateService : DateService;
  event: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, dateService: DateService) {
    this.dateService = dateService;
  }

  addDate() {
    console.log(this.event);
    let date = {nom: this.event.nom, start_date: this.event.start_date};
    this.dateService.addDate(date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatesPage');
  }

}
