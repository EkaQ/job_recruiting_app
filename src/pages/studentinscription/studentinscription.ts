import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder} from "@angular/forms";
import {StudentService} from "../../services/students";

/**
 * Generated class for the StudentinscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentinscription',
  templateUrl: 'studentinscription.html',
})
export class StudentinscriptionPage {

  studentForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.formBuilder.group({
      'nom': ['', Validators.required],
      'prenom': ['', Validators.required],
      'email': ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentinscriptionPage');
  }

  saveStudent() {
    if (this.studentForm.dirty && this.studentForm.valid) {
      console.log('nom ' + this.studentForm.value.nom);
      console.log('prenom ' + this.studentForm.value.prenom);
      console.log('email ' + this.studentForm.value.email);

      let student = {
        nom: this.studentForm.value.nom,
        prenom: this.studentForm.value.prenom,
        email: this.studentForm.value.email
      }

      this.studentService.addStudent(student);
      console.log(this.studentService.getStudents());
    }
  }

}
