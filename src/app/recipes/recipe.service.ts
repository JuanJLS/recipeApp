import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private slService: ShoppingListService){}
    
  private recipes: Recipe[] = [
    new Recipe(
      'Tika Masala',
      'Grilled lemongrass pork chops with nuoc cham and shredded carrots.',
      'https://picturetherecipe.com/wp-content/uploads/2020/07/Butter-Chicken-PictureTheRecipe.jpg',
      [
        new Ingredient('Pork Meat', 1),
        new Ingredient('Carrot', 2)
      ]
    ),

    new Recipe(
      'Chicken with Almond',
      'Chicken with some Almond and you can add more ingredients if you want.',
      'https://imag.bonviveur.com/presentacion-del-pollo-con-almendras-estilo-chino.webp',
      [
        new Ingredient('Chicken Meat', 1),
        new Ingredient('Almont', 6)
      ]
    ),
  ];
  getRecipes() {
    //To not return the direct reference, but a copy, we call slice()
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}