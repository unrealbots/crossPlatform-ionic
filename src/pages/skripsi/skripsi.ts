import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-skripsi',
  templateUrl: 'skripsi.html',
})
export class SkripsiPage implements OnInit{
  userForm: FormGroup;
  
  ngOnInit() {
    this.initializeForm()
  }

  private initializeForm() {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      nim: new FormControl(null, Validators.required),
      judul: new FormControl(null, Validators.required),
      angkatan: new FormControl("2014", Validators.required),
      pembimbingList: new FormArray([new FormControl(), new FormControl()]),
      lintasProdi : new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
      console.log(this.userForm.value)
    }
}
