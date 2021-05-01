import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddGroceryComponent } from './components/add-grocery/add-grocery.component';
import { DisplayGroceryComponent } from './components/display-grocery/display-grocery.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { UpdateGroceryComponent } from './components/update-grocery/update-grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    GroceryComponent,
    AddGroceryComponent,
    DisplayGroceryComponent,
    SearchpipePipe,
    UpdateGroceryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
