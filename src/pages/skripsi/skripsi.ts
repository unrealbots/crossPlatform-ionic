import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { TampilanPage } from "../tampilan/tampilan";

@IonicPage()
@Component({
  selector: 'page-skripsi',
  templateUrl: 'skripsi.html',
})
export class SkripsiPage implements OnInit{
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.initializeForm()
  }

  private initializeForm() {
    this.userForm =   new FormGroup({
      name:           new FormControl(null, Validators.required),
      nim:            new FormControl(null, Validators.required),
      judul:          new FormControl(null, Validators.required),
      angkatan:       new FormControl("2014", Validators.required),
      pembimbingList: new FormArray([new FormControl(null, Validators.required), new FormControl()]),
      lintasProdi :   new FormControl(null)
    })
  }

  onSubmit() {
      let modal = this.modalCtrl.create(TampilanPage, this.userForm.value);
      modal.present()
      this.userForm.reset()
    }
}