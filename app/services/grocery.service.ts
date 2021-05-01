import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private _http: HttpClient) { }
  url : any;

  public addGroceryData(grocery){
    return this._http.post('http://localhost:8080/add-grocery',grocery,{responseType : "text" as "json"}); 
  }

  public displayGrocery(){
    return this._http.get('http://localhost:8080/display-grocery');
  }

  // public searchByGroceryName(groceryName){
  //   return this._http.get('http://localhost:8080/search-grocery/'+groceryName);
  // }

  public delGrocery(groceryName){
    return this._http.get("http://localhost:8080/delete-grocery/"+groceryName);
  }

  public upGrocery(groceryName, groceryQuantity){
    this.url="http://localhost:8080/update-grocery";
    return this._http.put(`${this.url}/${groceryName}`, groceryQuantity);
  }
}