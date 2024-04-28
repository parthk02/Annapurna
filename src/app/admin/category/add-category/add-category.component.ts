import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit, OnDestroy {
    category?: Category;
    file_upload = '';
    catName: string = '';
    catSlug: string = '';
    thumbnail: string = '';
    isImage: boolean = false;
    id: string = '';
    baseURL: string = 'http://localhost:3131/images/';
    // categoryFG : FormGroup;
    hideEvent: EventEmitter<any> = new EventEmitter();


    constructor(
        public bsModalRef: BsModalRef,
        public _fb: FormBuilder,
        private _callData: DataService
    ) {
        // this.categoryFG = this._fb.group({
        //     name : [this.category?.name || '']
        // })
    }

    ngOnInit() {

        if (this.category) {
            this.isImage = true;
            console.log(this.category)
            this.catName = this.category.name;
            this.catSlug = this.category.slug;
            this.thumbnail = this.category.thumbnail;
            this.id = this.category._id;

        }
    }
    ngOnDestroy() {
        this.hideEvent.next(true); // modal is closed without any data.
    }

    createSlug(val: string) {
        let lowerVal = val.toLowerCase();
        this.catSlug = lowerVal.replace(/ /g, "-");
    }

    files: any;
    onFileChange(event: any) {
        let file = event.target.files;
        console.log(event);
        this.files = file[0];
    }

    submitForm() {
        var formData: any = new FormData();
        formData.append('name', this.catName);
        formData.append('slug', this.catSlug);
        formData.append('uploaded_file', this.files);
        console.log(formData);

        this._callData.addCatergory(formData).subscribe(
            (res: any) => {
                this.bsModalRef.hide();
            }
        )

    }
    editCat() {
        var formData: any = new FormData();
        formData.append('name', this.catName);
        formData.append('slug', this.catSlug);
        if (!this.isImage) {
            formData.append('uploaded_file', this.files);
            this._callData.updateCatergoryImage(this.id, formData).subscribe(
                (res: any) => {
                    this.bsModalRef.hide();
                }
            )
        } else {
            let data = {
                name : this.catName,
                slug : this.catSlug
            }
            this._callData.updateCatergory(this.id, data).subscribe(
                (res: any) => {
                    this.bsModalRef.hide();
                }
            )
        }
    }

    deleteImage() {
        this.isImage = !this.isImage
    }

}
