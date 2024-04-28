import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Category, Color, Product, Size, SubCategory } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';
import { Editor } from '@ckeditor/ckeditor5-core';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

    // Editor :Editor | any
    // public Editor: ClassicEditor | any;
    public Editor = ClassicEditorBuild;

    product?: Product;
    file_upload = '';
    id: string = '';
    categoryData: Category[] = [];
    subCategoryData: SubCategory[] = [];
    hideEvent: EventEmitter<any> = new EventEmitter();

    title: string = '';
    titleSlug: string = '';
    category: string = '';
    subCategory: string = '';
    minQty: number = 1;

    thumbnail1: any;
    thumbnail2: any;

    productPrice: number = 1;
    productDiscount: number = 50;
    productDiscountType: null | 'percent' | 'flat' = 'percent';

    shippingType: 'flat' | 'percent' | 'free' = 'free';
    shippingCost: number = 0;

    productDescription: any = '';

    metaTitle: string = '';
    metaDescription: string = '';
    metaKeyword: string = '';
    metaKeywords: string[] = [];

    productImage1: any;
    productImage2: any;
    productImage3: any;
    productImage4: any;
    productImage5: any;
    productImage6: any;
    productImage7: any;
    productImage8: any;


    amazonRating : number = 5;
    amazonRatingNumber : number = 5;
    amazonProductLink : string = '';

    youtubeVideo : string = '';

    colorList: Color[];
    sizeList: Size[];
    selectedDataColor: any;
    selectedDataSize: any;


    constructor(
        public bsModalRef: BsModalRef,
        public _fb: FormBuilder,
        private _callData: DataService
    ) {

        this.colorList = [
            {
                "_id": "6436ddb51855baf3fb691328",
                "label": "Black",
                "value": "black",
                "colorHex": "#000000",
                "createdAt": "2023-04-12T16:34:54.553Z",
                "__v": 0
            },
            {
                "_id": "6436ddb51855baf3fb691328",
                "label": "Black",
                "value": "black",
                "colorHex": "#000000",
                "createdAt": "2023-04-12T16:34:54.553Z",
                "__v": 0
            },
            {
                "_id": "6436ddb51855baf3fb691328",
                "label": "Black",
                "value": "black",
                "colorHex": "#000000",
                "createdAt": "2023-04-12T16:34:54.553Z",
                "__v": 0
            }, {
                "_id": "6436ddb51855baf3fb691328",
                "label": "Black",
                "value": "black",
                "colorHex": "#000000",
                "createdAt": "2023-04-12T16:34:54.553Z",
                "__v": 0
            }
        ];
        this.sizeList = [
            {
                "_id": "6436ddb51855baf3fb691328",
                "label": "Black",
                "value": "black",
                "createdAt": "2023-04-12T16:34:54.553Z",
                "__v": 0
            },
            {
                "_id": "6436ddb51855baf3fb691328",
                "label": "Black",
                "value": "black",
                "createdAt": "2023-04-12T16:34:54.553Z",
                "__v": 0
            },
            {
                "_id": "6436ddb51855baf3fb691328",
                "label": "Black",
                "value": "black",
                "createdAt": "2023-04-12T16:34:54.553Z",
                "__v": 0
            }, {
                "_id": "6436ddb51855baf3fb691328",
                "label": "Black",
                "value": "black",
                "createdAt": "2023-04-12T16:34:54.553Z",
                "__v": 0
            }
        ];
    }

    ngOnInit(): void {
        this.getCategoryData();
        this.getColors();
        this.getSizes();
        console.log('Product', this.product)
        if (this.product) {
            this.getSubCategoryData(this.product.category._id);
            this.splitKeywords(this.product.metaKeyword);


            console.log(this.product)

            this.title = this.product.title
            this.titleSlug = this.product.slug
            this.category = this.product.category._id
            this.subCategory = this.product.subcategory._id
            this.minQty = this.product.minQty

            this.thumbnail1 = this.product.thumbnailPrimary

            this.productPrice = this.product.productPrice
            this.productDiscount = this.product.productDiscount
            this.productDiscountType = this.product.productDiscountType

            this.shippingType = this.product.shippingType
            this.shippingCost = this.product.shippingCost

            this.productDescription = this.product.productDescription

            this.metaTitle = this.product.metaTitle
            this.metaDescription = this.product.metaDescription
            // this.metaKeywords = this. .metaKeyword
        }
    }

    ngOnDestroy() {
        this.hideEvent.next(true); // modal is closed without any data.
    }

    createSlug(val: string) {
        let lowerVal = val.toLowerCase();
        // this.titleSlug = lowerVal.replace(/ /g, "-");
        this.titleSlug = lowerVal.replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    }
    onFileChange(event: any, fileType: string) {
        if (fileType == 'thumb1') {
            let file = event.target.files;
            console.log(event);
            this.thumbnail1 = file[0];
        };
        if (fileType == 'thumb2') {
            let file = event.target.files;
            console.log(event);
            this.thumbnail2 = file[0];
        };

    }

    getCategoryData(): any {
        this._callData.getAllCategory().subscribe(
            (res: any) => {
                console.log(res)
                this.categoryData = res.data
            }
        );
    }

    getSubCategoryData(catId: string): any {
        this._callData.getSubCategoryByCategory(catId).subscribe(
            (res: any) => {
                console.log(res)
                this.subCategoryData = res.data
            }
        );
    }

    onsbcatChange() {
        console.log(this.subCategory)
    }

    urls = new Array<string>();
    imagesData: any[] = [];

    detectFiles(event: any) {
        // this.urls = [];
        let files = event.target.files;
        if (files) {

            // for (let file of files) {
            //     let reader = new FileReader();
            //     reader.onload = (e: any) => {
            //         this.urls.push(e.target.result);
            //     }
            //     reader.readAsDataURL(file);
            // }
            for (let i = 0; i < files.length; i++) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    this.urls.push(e.target.result);
                }
                reader.readAsDataURL(files[i]);
                this.imagesData.push(files[i])
            }
        }


        console.log(this.urls)
        console.log(this.thumbnail1)
        console.log(this.imagesData)

    }

    addProduct() {
        var formData: any = new FormData();
        formData.append('title', this.title);
        formData.append('slug', this.titleSlug);
        formData.append('category', this.category);
        formData.append('subcategory', this.subCategory);
        formData.append('minQty', this.minQty);

        // formData.append('category', this.categoryData[this.category]._id);
        formData.append('thumbnailPrimary', this.thumbnail1);
        formData.append('thumbnailSecondary', this.thumbnail2);
        // formData.append('productPhotos', this.urls);
        formData.append('productPrice', this.productPrice);
        formData.append('productDiscount', this.productDiscount);
        formData.append('productDiscountType', this.productDiscountType);
        formData.append('shippingType', this.shippingType);
        formData.append('shippingCost', this.shippingCost);
        formData.append('productDescription', this.productDescription);
        formData.append('metaTitle', this.metaTitle);
        formData.append('metaDescription', this.metaDescription);
        formData.append('metaKeyword', this.metakeywordvalue);
        formData.append('productImage1', this.productImage1);
        formData.append('productImage2', this.productImage2);
        formData.append('productImage3', this.productImage3);
        formData.append('productImage4', this.productImage4);
        formData.append('productImage5', this.productImage5);
        formData.append('productImage6', this.productImage6);
        formData.append('productImage7', this.productImage7);
        formData.append('productImage8', this.productImage8);

        formData.append('amazonRating', this.amazonRating);
        formData.append('amazonRatingNumber', this.amazonRatingNumber);
        formData.append('amazonProductLink', this.amazonProductLink);
        formData.append('youtubeVideo', this.youtubeVideo);


        for (let i = 0; i < this.selectedSize.length; i++) {
            const el = this.selectedSize[i];
            formData.append('size', el);
        }
        // for (let i = 0; i < this.imagesData.length; i++) {
        //     const el = this.imagesData[i];
        //     formData.append('productImages', el);
        // }
        for (let i = 0; i < this.selectedDataColor.length; i++) {
            const el = this.selectedDataColor[i];
            formData.append('color', el);
        }

        console.log(formData)
        this._callData.addProduct(formData).subscribe(
            (res: any) => {
                console.log(res)
                if (res['success']) {
                    this.bsModalRef.hide();
                }
            }
        )
    }






    shareCheckedList(item: any[]) {
        console.log(item + 'p');
    }
    shareIndividualCheckedList(item: any) {
        console.log(item.name);
        this.selectedDataColor = item;
    }


    shareCheckedListSize(item: any[]) {
        console.log(item + 's');
    }
    shareIndividualCheckedListSize(item: any) {
        console.log(item.name);
        this.selectedDataSize = item;
    }

    metakeywordvalue: string = '';
    addKeyword(event: any) {
        let value = event.target.value;
        if (value != '') {
            this.metaKeywords.push(value)
            if (this.metakeywordvalue == '') {
                this.metakeywordvalue = value;
            } else {
                this.metakeywordvalue = this.metakeywordvalue + ',' + value;
            }
        }
        this.metaKeyword = '';
        console.log(this.metakeywordvalue)
    }

    removeKeyword(i: number, item: string) {
        this.metaKeywords.splice(i, 1);

        console.log(item)
        let data = this.metakeywordvalue.split(item);
        console.log(data)
    }

    splitKeywords(val: string) {
        console.log(val)
        let data = val.split(',');
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            // console.log(data[i]);
            this.metaKeywords.push(data[i]);
            this.metakeywordvalue = this.metakeywordvalue + ',' + data[i];
        }

    }

    productImageUrl1: any;
    productImageUrl2: any;
    productImageUrl3: any;
    productImageUrl4: any;
    productImageUrl5: any;
    productImageUrl6: any;
    productImageUrl7: any;
    productImageUrl8: any;


    productImageUpload(event: any, i: number) {
        console.log(`working`)
        let file = event.target.files;
        let reader = new FileReader();

        console.log(i)
        switch (i) {
            case 1:
                this.productImage1 = file[0];
                console.log(`working 1`)
                reader.onload = (e: any) => {
                    this.productImageUrl1 = e.target.result;
                }
                reader.readAsDataURL(file[0]);
                break;
                case 2:
                    console.log(`working 2`)
                    this.productImage2 = file[0];
                    reader.onload = (e: any) => {
                        this.productImageUrl2 = e.target.result;
                    }
                    reader.readAsDataURL(file[0]);
                break;
            case 3:
                this.productImage3 = file[0];
                reader.onload = (e: any) => {
                    this.productImageUrl3 = e.target.result;
                }
                reader.readAsDataURL(file[0]);
                break;
            case 4:
                this.productImage4 = file[0];
                reader.onload = (e: any) => {
                    this.productImageUrl4 = e.target.result;
                }
                reader.readAsDataURL(file[0]);
                break;
            case 5:
                this.productImage5 = file[0];
                reader.onload = (e: any) => {
                    this.productImageUrl5 = e.target.result;
                }
                reader.readAsDataURL(file[0]);
                break;
            case 6:
                this.productImage6 = file[0];
                reader.onload = (e: any) => {
                    this.productImageUrl6 = e.target.result;
                }
                reader.readAsDataURL(file[0]);
                break;
            case 7:
                this.productImage7 = file[0];
                reader.onload = (e: any) => {
                    this.productImageUrl7 = e.target.result;
                }
                reader.readAsDataURL(file[0]);
                break;
            case 8:
                this.productImage8 = file[0];
                reader.onload = (e: any) => {
                    this.productImageUrl8 = e.target.result;
                }
                reader.readAsDataURL(file[0]);
                break;
            default:
                console.log(`not workinng`)
                break;
        }

    }

    deleteImage(i: number) {

        console.log(i)
        switch (i) {
            case 1:
                this.productImage1 = '';
                this.productImageUrl1 = null;
                break;
        
            case 2:
                this.productImage2 = '';
                this.productImageUrl2 = null;
                break;
        
            case 3:
                this.productImage3 = '';
                this.productImageUrl3 = null;
                break;
        
            case 4:
                this.productImage4 = '';
                this.productImageUrl4 = null;
                break;
        
            case 5:
                this.productImage5 = '';
                this.productImageUrl5 = null;
                break;
        
            case 6:
                this.productImage6 = '';
                this.productImageUrl6 = null;
                break;
        
            case 7:
                this.productImage7 = '';
                this.productImageUrl7 = null;
                break;
        
            case 8:
                this.productImage8 = '';
                this.productImageUrl8 = null;
                break;
        
            default:
                break;
        }
    }

    getColors(){
        this._callData.getAllColors().subscribe(
            (res:any) =>{
                console.log(res)
                this.colorList = res.data
            }
        )
    }
    getSizes(){
        this._callData.getAllSizes().subscribe(
            (res:any) =>{
                console.log(res)
                this.sizeList = res.data
            }
        )
    }

    getEditorData(){
        console.log(this.productDescription)
    }

    selectedSize : any= [] ;
    size : any= {} ;
    // sizevalue : string = '';
    sizePrice : string = '';

    addSize(){
        // this.size = this.size
        // this.size.price = Number(this.sizePrice);
        let data = {
            _id : this.sizeList[this.size]._id,
            __v : this.sizeList[this.size].__v,
            createdAt : this.sizeList[this.size].createdAt,
            updatedAt : this.sizeList[this.size].updatedAt,
            label : this.sizeList[this.size].label,
            value : this.sizeList[this.size].value,
            price : Number(this.sizePrice)
        }
        this.selectedSize.push(data);
        this.size = '';
        this.sizePrice = '';
    }

    removeSize(i : number){
        this.selectedSize.splice(i , 1);
    }
}
