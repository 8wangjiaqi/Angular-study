import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  icons:string="camera";
  goSub(){
    this.navCtrl.push(SearchPage);
  }
  constructor(public navCtrl: NavController) {

  }

}
