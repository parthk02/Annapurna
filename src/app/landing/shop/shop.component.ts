import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
    isCart: boolean = false;
    limit: number = 9;
    skip: number = 0;
    product: Product[] = [];
    categoryId? : string; 
    baseURL: string = 'http://localhost:3131/images/products/'

    view1: boolean = false;
    view2: boolean = true;
    view3: boolean = false;

    loader: boolean = false;

    constructor(private _calldata: DataService,
        private router : Router
        ) { }

    ngOnInit(): void {
        this.getAllProduct();
    }

    getAllProduct() {
        this.loader = true;
        this._calldata.getProductsByLimit(this.limit, this.skip).subscribe(
            (res: any) => {
                this.product = res['data']
                console.log(this.product)
                this.loader = false;
            }
        )
    }

    showMore(){
        this.limit += 9;
        this.getAllProduct();
    }
    

    openProduct(slug:string){
        this.router.navigate([`/product/${slug}`]);
        this.router.getCurrentNavigation()
    }
    openProductById(id:string){
        this.router.navigate([`/product/${id}`]);
        this.router.getCurrentNavigation()
    }

    changeView(n: Number){
        switch (n) {
            case 1:
                this.view1 = true;
                this.view2 = false;
                this.view3 = false;
                break;
    
            case 2:
                this.view1 = false;
                this.view2 = true;
                this.view3 = false;
                break;
    
            case 3:
                this.view1 = false;
                this.view2 = false;
                this.view3 = true;
                break;
    
            default:
                break;
        }
    }

}
