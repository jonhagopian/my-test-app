import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameTimerEmitter = new EventEmitter<{count: number, name: string}>();
  count: number = 0;
  myName: string = "Jon";
  intervalTimer;

  constructor() { }

  ngOnInit() {
  }

  startGameTimer() {
    this.intervalTimer = setInterval(() => {
      console.log("interval running");
      this.gameTimerEmitter.emit({count: this.count + 1, name: this.myName});
      this.count++;
    }, 1000);
  }

  stopGameTimer() {
    console.log("Stop Interval", "count: ", this.count);
    clearInterval(this.intervalTimer);
  }


}
