import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-form',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  userName = '';
  updatedText = '';

  ngOnInit() {
  }

  onUpdateUsername() {
    this.updatedText = 'Data Updated with value: ' + this.userName + ".";
    this.userName = '';
  }

}