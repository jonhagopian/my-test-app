import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myP = true;
  clicksArr = [];
  showArr = false;

  toggleParagraph() {
    this.myP = this.myP ? false : true;
    if (this.clicksArr.length) {
      this.clicksArr.push(this.clicksArr.slice(-1)[0] + 1);
      if (this.clicksArr.length >= 5) {
        this.showArr = true;
      }
    } else {
      this.clicksArr.push(1)
    }
    this.clicksArr.push();
  }
}
