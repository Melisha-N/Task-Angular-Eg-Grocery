import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/models/grocery';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private groceryServices : GroceryService) { }
  groceryName : string;
  groceries : Grocery[];
  ngOnInit(): void {
  }

  

}
