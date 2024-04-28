import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/myservices/common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  name:any;
    email:any;
    password:any;
    city:any;
    address:any;
    restaurantName:any;
    mobile:any;
  
    regformData(fom:NgForm){
      this.common.regformdata(fom.value).then((res)=>{
        console.log.apply(res);
  
      });
    }
    constructor(private common:CommonService){
  
    }
  }

