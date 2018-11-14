import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Add1Page } from '../add1/add1';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //弹窗,类当中只能声明属性和方法,记得在constructor中声明
    // let profileModal=this.modalCtrl.create(Add1Page);
    // profileModal.present();
    // console.log('ionViewDidLoad AddPage');
  }

}
