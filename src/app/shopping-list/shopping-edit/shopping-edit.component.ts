import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIdex: number;
  editedItem: Ingredient;

  showAlert: boolean = false;

  constructor(private slService: ShoppingListService) {}
  @ViewChild('f', {static: false}) slForm: NgForm;

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIdex = index;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

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

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
  