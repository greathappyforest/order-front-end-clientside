import { Component, OnInit,OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ShareDataService } from '../service/share-data.service';

@Component({
  selector: 'app-restaurant-search-output',
  templateUrl: './restaurant-search-output.component.html',
  styleUrls: ['./restaurant-search-output.component.css']
})
export class RestaurantSearchOutputComponent implements OnInit {


  searchRes: any;
  subscription: Subscription;
  jsonOutPut:String;


  constructor(private shareData:ShareDataService) { 
    this.subscription  = this.shareData.getSearchRes().subscribe(data => { this.searchRes = data.json(); 
    console.log(this.searchRes)
    this.jsonOutPut= JSON.stringify(this.searchRes);
    });
    
  }
  ngOnInit() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
