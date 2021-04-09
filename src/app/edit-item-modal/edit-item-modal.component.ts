import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from 'src/assets/modules/budget-item-module';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent implements OnInit {
  @Input() item: BudgetItem;
  constructor() {}

  ngOnInit(): void {}

  onSubmitted(updatedItem: BudgetItem) {}
}
