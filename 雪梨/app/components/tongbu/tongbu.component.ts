import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
//把它的http文件拿来用

@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
// class Course{
//   constructor(
//       public id:number,
//       public courseName:string,
//       public images:string,
//       public task:number,
//       public person:number
//   ){}
// }

export class TongbuComponent implements OnInit {

  constructor(private http:HttpClient, private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  num=2;
  courses;
  ngOnInit() {
     this.http.get('/api/courses').subscribe((data)=>{
        console.log(data);
        this.courses = data;
      });
      }



    //参数快照
    // this.courseId = this.router.snapshot.params['courseId'];
    //参数订阅
    // this.router.params.subscribe((params)=>{
    //   this.courseId = params['courseId'];
    // });
  }

  // go(){
  //   //js跳转
  //   this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});
  // }

// }
