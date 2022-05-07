import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 60;
  
  constructor() { }

  start(ms: number){
    if(!this.timer){
      this.timer = setInterval( () => {this.counter--;}, ms);
    }
  }

  getCount(){
    if(this.counter==54){
      this.counter = 60;
    }
    return this.counter;
  }  

}