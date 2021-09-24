import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.css']
})
export class IncrementDecrementComponent{

  constructor() { }

  ngOnInit(): void {
  }
  
  OutputNumDefault = 0;
  rndNumber = (Math.random() * 10).toFixed(0);

  Increment(){
    this.OutputNumDefault =  this.OutputNumDefault += Math.floor(Math.random( ) * 10);
    
  }
  Decrement(){
    this.OutputNumDefault =  this.OutputNumDefault -= Math.floor(Math.random( ) * 10);
  }


}
