import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {


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
