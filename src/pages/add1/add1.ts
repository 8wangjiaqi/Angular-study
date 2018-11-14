import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AddPage } from '../add/add';

/**
 * Generated class for the Add1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add1',
  templateUrl: 'add1.html',
})
export class Add1Page {
  //退回到之前的页面
  close(){
    this.navCtrl.pop();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // goSub(){
  //   this.navCtrl.push(AddPage);
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Add1Page');
  }

}
