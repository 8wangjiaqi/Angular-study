import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child012',
  templateUrl: './child012.component.html',
  styleUrls: ['./child012.component.css']
})
export class Child012Component implements OnInit {
  
  @Input() arr:Array<any>;
  @Input() arr1:Array<any>;
  @Input() txt;
  @Output() delIndex=new EventEmitter();
  @Output() del1Index=new EventEmitter();
  @Output() changeIndex=new EventEmitter();
  @Output() change1Index=new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  del1(i){
    this.del1Index.emit(i);
  }
  change(i){
     this.changeIndex.emit(i);
    // console.log()
  }
  
  change1(i){
    this.change1Index.emit(i);
  }

  constructor() { }

  ngOnInit() {
  }

}
