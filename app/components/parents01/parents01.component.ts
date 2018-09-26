import { Component, OnInit } from '@angular/core';
import{Services01Service} from  '../../services/services01.service'

@Component({
  selector: 'app-parents01',
  templateUrl: './parents01.component.html',
  styleUrls: ['./parents01.component.css']
})
export class Parents01Component implements OnInit {


[x: string]: any;
txt:string;
arr:string[]=[];
arr1:string[]=[];
  sendTxt(txt){
      this.txt=txt;
      // console.log(this.txt);
  }
  
getValue(e){
  if(e.keyCode==13){
    // console.log(this.txt);
    this.arr.push(this.txt);
    this.txt="";
  }
  this.local.set('todo',this.arr);
}

del(i){
  this.arr.splice(i,1);
  this.local.set('todo',this.arr);
  // console.log(this.arr1);
}

del1(i){
  this.arr1.splice(i,1);
  this.local.set('todo1',this.arr1);
  // console.log(1);
}

change(i){
console.log(this.arr[i]);
    //   this.arr1.push(this.arr[i]);   
    // //先添加，否则删除后找不到这一项
    // this.arr.splice(i,1);

    let a=this.arr.splice(i,1);
    this.arr1.push(a[i]);
    
    this.local.set('todo',this.arr);
    this.local.set('todo1',this.arr1);

}

change1(i){
    this.arr.push(this.arr1[i]);   
    this.arr1.splice(i,1);
    // console.log(3);
}


// constructor() { }
constructor(private local:Services01Service) { }
//get set 报错

ngOnInit() {
  if(this.local.get("todo")){
    this.arr=localStorage.getItem("todo").split(",");
  }else{
    this.arr=[];
  }
  if(this.local.get("todo1")){
    this.arr1=localStorage.getItem("todo1").split(",");
  }else{
    this.arr1=[];
  }

}

}
