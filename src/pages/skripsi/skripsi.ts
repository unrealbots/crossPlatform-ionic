import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-skripsi',
  templateUrl: 'skripsi.html',
})
export class SkripsiPage {

  userform: FormGroup;

  ngOnInit(){
    this.initializeForm()
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private initializeForm(){
    this.userform = FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      classOf:  new FormControl("2014", Validators.required),
    })
  }

}
