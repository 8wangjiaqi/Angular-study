import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child011',
  templateUrl: './child011.component.html',
  styleUrls: ['./child011.component.css']
})
export class Child011Component implements OnInit {
  @Output()txt:string;
  // @Output()text:string;
  @Output() getV=new EventEmitter();
  getValue(e){
    this.getV.emit(e);
  }
  @Output() Txt:EventEmitter<string> = new EventEmitter();
  sendTxt(e){
    this.Txt.emit(this.txt);
  }





  constructor() { }

  ngOnInit() {
  }

}
