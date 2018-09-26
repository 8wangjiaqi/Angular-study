import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Services01Service {

set(key,value){
  localStorage.setItem(key,value);
  // console.log(1);
}

get(key){
  return localStorage.getItem(key);
}
  constructor() { }
}
