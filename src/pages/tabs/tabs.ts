import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import { MyPage } from '../my/my';
import { Add1Page } from '../add1/add1';
import { ModalController, NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = AddPage;
  tab4Root = ContactPage;
  tab5Root = MyPage;



  
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
       //弹窗,类当中只能声明属性和方法,记得在constructor中声明
    let profileModal=this.modalCtrl.create(Add1Page);
    profileModal.present();
    console.log('ionViewDidLoad AddPage');
    },false);
   
  }

}
