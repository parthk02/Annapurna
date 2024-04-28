import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';
import { AddProductComponent } from './add-product/add-product.component';
import { take } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    data: Product[] = [];
    Data: Product[] = [];
    catId: any;

    bsModalRef?: BsModalRef;
    constructor(
        private modalService: BsModalService,
        private _callData: DataService,
    ) { }

    ngOnInit(): void {
        this.getData();
        // this.spinner.show();
    }

    getData() {
        this._callData.getAllProduct().subscribe(
            (res: any) => {
                this.data = res.data
            }
        )
    };

    openProduct(data?: any) {
        const initialState: ModalOptions = {
            initialState: {
                product: data
            }
        };
        this.bsModalRef = this.modalService.show(AddProductComponent, initialState);
        this.bsModalRef.setClass('modal-lg');
        let callData = this.getData();
        this.bsModalRef.onHide?.pipe(take(1)).subscribe(val => {
            if (val) {
                this.getData();
            }
        })
    };

    deleteProduct(id: any) {
        if (confirm("Do you really want to delete this Product?")) {
            this._callData.deleteProduct(id).subscribe(
                (res : any)=>{
                    this.getData();
                }
            )
        }
    };
}
