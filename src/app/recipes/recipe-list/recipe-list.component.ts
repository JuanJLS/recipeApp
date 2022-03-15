import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Tika Masala',
      'Grilled lemongrass pork chops with nuoc cham and shredded carrots.',
      'https://picturetherecipe.com/wp-content/uploads/2020/07/Butter-Chicken-PictureTheRecipe.jpg'
    ),

    new Recipe(
      'Chicken with Almond',
      'Chicken with some Almond and you can add more ingredients if you want.',
      'https://imag.bonviveur.com/presentacion-del-pollo-con-almendras-estilo-chino.webp'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
