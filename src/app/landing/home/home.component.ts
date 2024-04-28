import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Product } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Virtual]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 7500, noPause: true, showIndicators: true } }
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  product : any[] = [];
  category : any[] = [];
  loader: boolean = false;
  baseURL: string = 'http://localhost:3131/images/products/';
  baseURLCat: string = 'http://localhost:3131/images/';

  constructor(
    private _calldata : DataService
  ) { }

  ngOnInit(): void {
    this.getAllProduct(4, 0);
    this.getAllCategory();
  }




  getAllCategory(){
    this._calldata.getAllCategory().subscribe(
      (res : any) =>{
        this.category = res['data']
        console.log(res)
      }
    )
  }

  getAllProduct(limit: number, skip : number) {
    this.loader = true;
    this._calldata.getProductsByLimit(limit, skip).subscribe(
      (res: any) => {
        this.product = res['data']
        console.log(this.product)
        this.loader = false;
      }
    )
  }
}
