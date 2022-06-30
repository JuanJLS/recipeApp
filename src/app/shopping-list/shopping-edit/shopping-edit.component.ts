import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {

  showAlert: boolean = false;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.showAlert = true;
    this.showAlertInterval();
    this.slService.addIngredient(newIngredient);
  }

  showAlertInterval() {
   setInterval(() => {
      this.showAlert = false;
   }, 2500)


  }
}
