import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kecheng',
  templateUrl: './kecheng.component.html',
  styleUrls: ['./kecheng.component.css']
})
export class KechengComponent implements OnInit {

  constructor(private http:HttpClient, private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  num=2;
  courses;
  ngOnInit() {
     this.http.get('/api/courses2').subscribe((data)=>{
        console.log(data);
        this.courses = data;
      });
      }
    }
