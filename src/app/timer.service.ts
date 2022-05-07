import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {

  constructor() { }

  start(ms: number){
    if(!this.timer){
      this.timer = setInterval( () => {this.counter--;}, ms);
    }
  }

  getCount(){
    return this.counter;
  }  

}