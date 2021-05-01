import { Component, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-update-grocery',
  templateUrl: './update-grocery.component.html',
  styleUrls: ['./update-grocery.component.css']
})
export class UpdateGroceryComponent implements OnInit {

  // groceryName: string;
  constructor() {}

  ngOnInit(): void {}  

  // public updateGroceryNow(groceryName : string, groceryQuantity : string){
  //   let resp= this.groceryService.upGrocery(grocerName,groceryQuantity);
  //     resp.subscribe(data => this.groceries = data);
  
  // }
}


