import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AddCategoryComponent } from './add-category/add-category.component';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Category } from 'src/app/models/data.models';


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    data: Category[] = [];

    bsModalRef?: BsModalRef;
    constructor(
        private modalService: BsModalService,
        private _callData: DataService,
    ) { }

    ngOnInit(): void {
        this.getData();
        // this.spinner.show();

    }

    addCat(data?: any) {
        const initialState: ModalOptions = {
            initialState: {
                category: data
            }
        };
        this.bsModalRef = this.modalService.show(AddCategoryComponent, initialState);
        this.bsModalRef.content.closeBtnName = 'Close';
        let callData = this.getData();
        this.bsModalRef.onHide?.pipe(take(1)).subscribe(val => {
            if (val) {
                this.getData();
            }
        })
    }

    getData(): any {
        this._callData.getAllCategory().subscribe(
            (res: any) => {
                this.data = res.data
            }
        );
    }

    deleteCategory(id: string) {
        if (confirm("Do you really want to delete this category?")) {
            this._callData.deleteCategory(id).subscribe(
                (res: any) => {
                    this.getData();
                }
            )
        }
    }
    changeStatus(id: string, status: boolean) {
        let data = {
            status : !status
        }
        this._callData.changeCatergoryStatus(id, data).subscribe(
            (res: any) => {
                this.getData();
            }
        )
    }

}
