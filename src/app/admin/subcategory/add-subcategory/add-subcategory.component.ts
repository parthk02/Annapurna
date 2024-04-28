import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Category, SubCategory } from 'src/app/models/data.models';

@Component({
    selector: 'app-add-subcategory',
    templateUrl: './add-subcategory.component.html',
    styleUrls: ['./add-subcategory.component.scss']
})
export class AddSubcategoryComponent {
    subCategory?: SubCategory;
    subcatName: string = '';
    subcatSlug: string = '';
    id: string = '';
    file_upload = '';
    category: any;
    thumbnail : string = '';
    isImage : boolean = false;
    baseURL: string = 'http://localhost:3131/images/';

    hideEvent: EventEmitter<any> = new EventEmitter();

    constructor(
        public bsModalRef: BsModalRef,
        public fb: FormBuilder,
        private _callData: DataService
    ) {
    }
    ngOnInit() {
        this.getCategoryData();
        if(this.subCategory){
            this.isImage = true;
            this.subcatName = this.subCategory.name;
            this.subcatSlug = this.subCategory.slug;
            this.thumbnail = this.subCategory.thumbnail;
            this.category = this.subCategory.category._id;
            this.id = this.subCategory._id;
        }

        console.log(this.category)
    }
    ngOnDestroy() {
        this.hideEvent.next(true); // modal is closed without any data.
    }

    createSlug(val: string) {
        let lowerVal = val.toLowerCase();
        this.subcatSlug = lowerVal.replace(/ /g, "-");
    }

    files: any;
    onFileChange(event: any) {
        let file = event.target.files;
        console.log(event);
        this.files = file[0];
    }

    submitForm() {

        var formData: any = new FormData();
        formData.append('name', this.subcatName);
        formData.append('slug', this.subcatSlug);
        formData.append('category', this.category);
        formData.append('subCat_Img', this.files);

        this._callData.addSubCatergory(formData).subscribe(
            (res: any) => {
                this.bsModalRef.hide();
                console.log(res)
            }
        )
    }

    categoryData: Category[] = [];
    getCategoryData(): any {
        this._callData.getAllCategory().subscribe(
            (res: any) => {
                console.log(res)
                this.categoryData = res.data
            }
        );
    }
    editSubCat(){
        var formData: any = new FormData();
        formData.append('name', this.subcatName);
        formData.append('slug', this.subcatSlug);
        formData.append('category', this.category);
        if (!this.isImage) {
            formData.append('subCat_Img', this.files);
            this._callData.updateSubCatergoryImage(this.id, formData).subscribe(
                (res: any) => {
                    this.bsModalRef.hide();
                }
            )
        } else {
            let data = {
                name : this.subcatName,
                slug : this.subcatSlug,
                category : this.category
            }
            this._callData.updateSubCatergory(this.id, data).subscribe(
                (res: any) => {
                    this.bsModalRef.hide();
                }
            )
        }
    }

    deleteImage(){
        this.isImage = !this.isImage;
    }

}
