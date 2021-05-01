import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGroceryComponent } from './components/add-grocery/add-grocery.component';
import { DisplayGroceryComponent } from './components/display-grocery/display-grocery.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'grocery',component:GroceryComponent},
  {path:'display-grocery',component:DisplayGroceryComponent},
  {path:'search-grocery',component:SearchComponent},
  {path:'add-grocery',component: AddGroceryComponent},
  {path:'', redirectTo:'/grocery', pathMatch:'full'},
  {path:'**',component:GroceryComponent} //to-do page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
