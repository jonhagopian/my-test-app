import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe One', 'This is simply a test for one', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 'flour: 1c, salt, 1tsp'),
    new Recipe('A Test Recipe Two', 'This is simply a test for two', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 'flour: 2c, salt, 2tsp')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log("From Recipe-list-component");
  }

}
