import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {StudentService} from "../../services/students";
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

  endpoint: any = '';
  api_posts: any = '';
  data: any = {};
  studentService: StudentService;

  constructor(public navCtrl: NavController, public navParams: NavParams,  studentService: StudentService, private alertCtrl: AlertController) {

    this.studentService = studentService;

    this.endpoint = 'https://jsonplaceholder.typicode.com';
    this.api_posts = '/posts/1';
    /*this.http.get(this.endpoint + this.api_posts)
      .subscribe((res) => {
        this.data = res.json();
        console.log(this.data);
      });
    console.log(this.data);*/
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  itemSelected(s){
    let alert = this.alertCtrl.create({
      title: 'Detail',
      message: '<p>prenom: ' + s.prenom + '</p><p>nom: ' + s.nom + '</p><p>email: ' + s.email + '</p>',
      buttons: ['Ok']
    });
    alert.present();
  }

}
