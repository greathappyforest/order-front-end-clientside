import { Component, OnInit, Input, Output} from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import {Http,Headers, RequestOptions} from '@angular/http';
import {ShareDataService} from '../service/share-data.service'
@Component({
  selector: 'app-order-input',
  templateUrl: './order-input.component.html',
  styleUrls: ['./order-input.component.css']
})
export class OrderInputComponent implements OnInit {

  constructor(private http: Http, private shareData: ShareDataService) {}
  
  ngOnInit() {
    this.shareData.getorderPostRes().subscribe(res => this.res = res)
  }


  res:any 
  orderInfo :any
  private host="http://localhost:8003"

  post() {
    	
     this.orderInfo=  document.getElementById('messageContents').textContent
     this.orderInfo = JSON.parse(this.orderInfo);
     let url =this.host+"/orderinfo/post";
     
    let body=this.orderInfo
    console.log(this.orderInfo)
    return this.http.post(url,body).subscribe(data => {
      this.shareData.postOrderRes( data );
      console.log(data);
    });
                   
  }
}
