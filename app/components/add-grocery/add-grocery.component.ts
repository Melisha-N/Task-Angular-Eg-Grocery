import { Component, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/services/grocery.service';
import { Grocery } from 'src/app/models/grocery';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent implements OnInit {
  public message: any;
  public grocery: Grocery = new Grocery();

  constructor(private groceryService : GroceryService) { }

  ngOnInit(): void {
  }
    // public Grocery ={
    //   groceryCategory : '',
    //   groceryName : '',
    //   groceryType : '',
    //   groceryQuantity : '',
    //   groceryRatings : ''
    
    // }
  public addGrocery(){
    let resp =  this.groceryService.addGroceryData(this.grocery);
    resp.subscribe(data =>{
       this.message = data;
       console.log(this.message);
       
    })
   }
 }


// public Consumer={
//   username : '',
//   firstname : '',
//   lastname : '',
//   emailid : '',
//   age : '',
//   password : ''
// }

  // public consumer: Consumer = new Consumer("","","",0,"");
