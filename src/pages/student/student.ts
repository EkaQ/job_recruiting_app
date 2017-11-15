import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import {Http} from '@angular/http';*/
/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  /*endpoint;
  api_posts;*/
  constructor(public navCtrl: NavController, public navParams: NavParams, /*private http:Http*/) {

    /*endpoint: any = 'https://jsonplaceholder.typicode.com';
    api_posts: any = '/posts/1';
    this.http.get(this.endpoint + this.api_posts)
      .subscribe(res => this.data = res.json());*/
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }



}
