import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { SubCategory } from 'src/app/models/data.models';
import { take } from 'rxjs';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';

@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.component.html',
    styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent {
    data: SubCategory[] = [];
    Data: SubCategory[] = [];
    catId :any;
    
    bsModalRef?: BsModalRef;
    constructor(
        private modalService: BsModalService,
        private _callData: DataService,
    ) { }

    ngOnInit(): void {
        this.getData();
        // this.spinner.show();

    }



    addSubCategory(data?: SubCategory) {
        const initialState: ModalOptions = {
            initialState: {
                subCategory : data
            }
        };
        this.bsModalRef = this.modalService.show(AddSubcategoryComponent, initialState);
        this.bsModalRef.content.closeBtnName = 'Close';
        let callData = this.getData();
        this.bsModalRef.onHide?.pipe(take(1)).subscribe(val => {
            if (val) {
                this.getData();
            }
        })
    }

    getData(): any {
        this._callData.getAllSubCategory().subscribe(
            (res: any) => {
                console.log(res)
                this.data = res.data
                this.Data = res.data
            }
        );
    }

    getSubCategoryByCategory(catId: string): any {
        console.log(catId)
        if(catId == 'All'){
            console.log(catId)
            this.getData(); 
        }else{
            this._callData.getSubCategoryByCategory(catId).subscribe(
                (res: any) => {
                    console.log(res)
                    this.data = res.data
                }
            );
        }
    }

    deleteSubCategory(id: string) {
        if (confirm("Do you really want to delete this category?")) {
            this._callData.deleteSubCategory(id).subscribe(
                (res: any) => {
                    console.log(res);
                    this.getData();
                }
            )
        }
    }

    changeStatus(id: string, status: boolean) {
        let data = {
            status : !status
        }
        this._callData.changeSubCatergoryStatus(id, data).subscribe(
            (res: any) => {
                this.getData();
            }
        )
    }
}
