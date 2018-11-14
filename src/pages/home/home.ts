import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // constructor(public navCtrl: NavController) {

  // }
  icons:string="camera";
  items = [];

  //默认显示isActive
  // isActive=true;
  // isClick(){
  //   this.isActive=!this.isActive;
  // }

  //循环
  arr=['推荐','家居','餐厨','床上用品']
  
  isActive=0;
  isClick(i){
    this.isActive=i;
  }



  constructor(public http:HttpClient,public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  goSub(){
    this.navCtrl.push(LoginPage);
  }
  goSubb(){
    this.navCtrl.push(SearchPage);
  }
  ionViewDidLoad(){
    // 调用组件的方法，和@ViewChild连用
    // this.ac.get();
  }
  // 上拉加载
  doInfinite(infiniteScroll){
    // 真正异步请求数据
    // this.http.get('/api/courses').subscribe(data=>{
    //   console.log(data);
    //   infiniteScroll.complete();
    // })
    // 定时器模拟异步操作
    // setTimeout(() => {
    //   for (let i = 0; i < 30; i++) {
    //     this.items.push( this.items.length );
    //   }
    //   infiniteScroll.complete();
    //   if(this.items.length>90){
    //     infiniteScroll.enable();
    //   }
    // }, 500);
  }
  // 下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }



}
