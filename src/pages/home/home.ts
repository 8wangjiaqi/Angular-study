import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // constructor(public navCtrl: NavController) {

  // }
  icons:string="camera";
  items = [];

  constructor(public http:HttpClient,public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  goSub(){
    this.navCtrl.push('APage',{id:1});
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
