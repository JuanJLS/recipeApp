import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
    
  private recipes: Recipe[] = [
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
  getRecipes() {
      return this.recipes.slice();
  }
}