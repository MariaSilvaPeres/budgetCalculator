import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/assets/modules/budget-item-module';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  totalBudget: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }
}
