import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DengluPage } from '../denglu/denglu';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  goSub(){
    this.navCtrl.push(DengluPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //依赖注入的服务，用法和angular同
  }

  ionViewDidLoad() {
    console.log(this.navParams.data);
    console.log(this.navParams.data.id);
    //data把对象完全打出来，再.xx,具体到拿谁
    // console.log(this.navParams.get('id'));
    //get是要写明拿谁，直接拿到id的值
    // console.log(1)
  }

}
