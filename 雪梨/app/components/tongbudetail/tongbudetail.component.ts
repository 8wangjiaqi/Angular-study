import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})

export class TongbudetailComponent implements OnInit {

  constructor(private http:HttpClient, private router:ActivatedRoute) { }
  courseId:number;
  course;
  num=1;
  change(n){
    // this.num=n;
    console.log( event);
    // this.num=event.target.value;
  }
  jsonObject:Object={foo:'bar',baz:'2'};
  date=new Date();
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    // this.http.get('/api/courses/'+this.courseId).subscribe((data)=>{
    
    //  管道获取
    this.http.get('/api/courses/'+this.courseId).pipe(map(data=>{
      // data.name='haha';
      return data;
    // })).pipe(filter(data=>{
      //filter进行过滤

      // return data.id==3;//返回id是3的
    })).subscribe((data)=>{
      console.log(data);
      this.course = data;
    });
    //  this.http.get('/api/courses/'+this.courseId);
    }
  }

