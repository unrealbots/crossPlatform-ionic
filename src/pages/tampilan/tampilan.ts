import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tampilan',
  templateUrl: 'tampilan.html',
})
export class TampilanPage {
  userInfo: any

  ngOnInit(){
    console.log(this.navParams.data)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    var passedData = this.navParams.data
    var temp = new Array()

    temp.push(passedData.name)
    temp.push(passedData.nim)
    temp.push(passedData.judul)
    temp.push(passedData.angkatan)
    temp.push(passedData.pembimbingList[0])
    temp.push(passedData.pembimbingList[1])
    temp.push(passedData.lintasProdi ? "Ya" : "Tidak")

    this.userInfo = temp
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

}
