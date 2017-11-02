import { Component, OnInit, Input, Output} from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import {Http,Headers, RequestOptions} from '@angular/http';
import {ShareDataService} from '../service/share-data.service'
@Component({
  selector: 'app-restaurant-search-input',
  templateUrl: './restaurant-search-input.component.html',
  styleUrls: ['./restaurant-search-input.component.css'],
  providers: []
})
export class RestaurantSearchInputComponent implements OnInit {

  constructor(private http: Http, private shareData: ShareDataService) {}
  

  ngOnInit() {
    this.shareData.getSearchRes().subscribe(res => this.restaurantInfo = res)
  }


  restaurantInfo: any;
  restaurantName: String;
  restaurantType: any;
  private host="http://localhost:8002"


  types = [
    {value: 'SEAFOOD-0', viewValue: 'Seafood'},
    {value: 'FASTFOOD-1', viewValue: 'Fast Food'},
    {value: 'CHINESEFOOD-2', viewValue: 'Chinese Food'},
    {value: 'JAPANESEFOOD-3', viewValue: 'Japanese Food'},
    {value: 'MEXICANFOOD-4', viewValue: 'Mexican Food'}
  ];
  
  search1() {
    
     let url =this.host+"/restaurantinfo/get/name/"+this.restaurantName;
     if(this.restaurantName==undefined || this.restaurantName=="")
      url = this.host +"/restaurantinfo/get?page=0&size=100";
   //  console.log(url)
     
    let headers = new Headers({ 

    });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get(url,headers.set).subscribe(data => {
      this.restaurantInfo = data;
      this.shareData.postSearchRes( data );
     // console.log(data);
    });
                   
  }

  search2() {
    this.restaurantType=this.restaurantType.slice(0,-2)
     let url = this.host+"/restaurantinfo/get/type/"+this.restaurantType;
   //  console.log(url)
     
    let headers = new Headers({ 

    });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get(url,headers.set).subscribe(data => {
      this.restaurantInfo = data;
      this.shareData.postSearchRes( data );
     // console.log(data);
    });
                   
  }


}
