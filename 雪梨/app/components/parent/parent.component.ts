import { Component, OnInit, Host, Optional } from '@angular/core';
import { CommonService } from '../../services/common.service';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  // constructor(private local:CommonService) {}
  
  // data:Msg[];
  // ngOnInit(){
//     if(this.local.get('todo')){
//       this.data = JSON.parse(this.local.get('todo'));
//     }else{
//       this.data = [];
//     }
//   }
//   addData(e){
//     this.data.push(new Msg(e,false));
//     this.local.set('todo',JSON.stringify(this.data));
//   }
//   del(idx){
//     this.data.splice(idx,1);
//     this.local.set('todo',JSON.stringify(this.data));
//   }
//   change(idx){
//     this.data[idx].done = !this.data[idx].done;
//     this.local.set('todo',JSON.stringify(this.data));
//   }


// }
// export class Msg{
//   constructor(public title:string,public done:Boolean){}
// }
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
  }