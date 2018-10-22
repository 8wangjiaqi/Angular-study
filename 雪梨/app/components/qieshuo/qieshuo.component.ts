import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qieshuo',
  templateUrl: './qieshuo.component.html',
  styleUrls: ['./qieshuo.component.css']
})
export class QieshuoComponent implements OnInit {


  constructor(private http:HttpClient, private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  num=2;
  courses;
  ngOnInit() {
     this.http.get('/api/courses3').subscribe((data)=>{
        console.log(data);
        this.courses = data;
      });
      }
    }
