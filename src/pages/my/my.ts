import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShezhiPage } from '../shezhi/shezhi';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  
  icons:string="open";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goSub(){
    this.navCtrl.push(ShezhiPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
