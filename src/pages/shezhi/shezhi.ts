import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DengluPage } from '../denglu/denglu';
// import { ShezhiPage } from '../shezhi/shezhi';
/**
 * Generated class for the ShezhiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shezhi',
  templateUrl: 'shezhi.html',
})
export class ShezhiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  goSub(){
    this.navCtrl.push(DengluPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShezhiPage');
  }

}
