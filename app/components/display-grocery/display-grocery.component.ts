import { Component, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-display-grocery',
  templateUrl: './display-grocery.component.html',
  styleUrls: ['./display-grocery.component.css']
})
export class DisplayGroceryComponent implements OnInit {

  constructor(private groceryService: GroceryService) { }
  public groceries: any = [];
  public searchValue :string;
  ngOnInit(): void {
    let resp= this.groceryService.displayGrocery();
    resp.subscribe(data => this.groceries = data);

  }
public delGrocery(grocerName : string){
  let resp= this.groceryService.delGrocery(grocerName);
    resp.subscribe(data => this.groceries = data);

}
}
