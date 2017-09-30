import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tampilan',
  templateUrl: 'tampilan.html',
})
export class TampilanPage {
  userInfo = new Array()
  listPembimbing = new Array()

  ngOnInit(){
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    var passedData = this.navParams.data
    var temp = new Array()
    var tempList = new Array()

    this.userInfo.push(passedData.name)
    this.userInfo.push(passedData.nim)
    this.userInfo.push(passedData.judul)
    this.userInfo.push(passedData.angkatan)
    this.userInfo.push(passedData.lintasProdi ? "Ya" : "Tidak")
    for(var i=0; i<passedData.pembimbingList.length; i++){
      this.listPembimbing.push(passedData.pembimbingList[i])
    }
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }
}
