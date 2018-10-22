import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  course;
  headers=new HttpHeaders({});
  ngOnInit() {
    // this.timer = setInterval(function(){
    //   console.log(11);
    // },1000);

    // this.http.get('/api/course').subscribe((data)=>{
    // //   this.http.get('/api/course').subscribe((data)=>{
    // //     //api将其他接口转到8000上,在proxy.conf.json（根目录新建）中写入
    //   console.log(data);
    //   this.course = data;
    // });
    // }
    // //get是请求，拿过来用

    this.http.post('/api',{name:'aa',pwd:12345},{headers:this.headers}).subscribe((data)=>{
      //   this.http.get('/api/course').subscribe((data)=>{
      //     //api将其他接口转到8000上,在proxy.conf.json（根目录新建）中写入
        console.log(data);
        // this.course = data;
      });
      }
      // post是提交，提交到服务器的，第二个参数（body）是提交的东西，一定要写
      // 提交的时候放到请求体中相对来说不直观看见，比较私密


}
