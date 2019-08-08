import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKF6zzmuoqOd4F_kal09j6gAoXTERuApaloxSC7iB8GTaLmXup8w'),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKF6zzmuoqOd4F_kal09j6gAoXTERuApaloxSC7iB8GTaLmXup8w')
  ];

  constructor() { }

  ngOnInit() {
  }

}
