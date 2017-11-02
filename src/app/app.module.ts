import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PrettyJsonModule} from 'angular2-prettyjson';


import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatTabsModule,
  MatExpansionModule,
  MatSelectModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { OrderInputComponent } from './order-input/order-input.component';
import { RestaurantSearchInputComponent } from './restaurant-search-input/restaurant-search-input.component';
import { RestaurantSearchOutputComponent } from './restaurant-search-output/restaurant-search-output.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderInputComponent,
    RestaurantSearchInputComponent,
    RestaurantSearchOutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    HttpModule,
    PrettyJsonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
