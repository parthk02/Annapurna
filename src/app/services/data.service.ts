import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseResponse, CategoryRes, Color, ColorRes, Product, Size, SizeRes, SubCategoryRes } from "../models/data.models";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root",
})
export class DataService {
    userHeader: any = {
        headers: new HttpHeaders({
            "_id": sessionStorage.getItem('_id') || '',
        }),
    }
    headers: any;
    baseURL: string = 'http://localhost:3131/api/';

    constructor(private http: HttpClient) { }


    getHeaders(){
        this.headers = {
            headers: new HttpHeaders({
                "auth-token": sessionStorage.getItem('auth-token') || '',
            }),
        };
    };

    // Login

    login(data: any): any {
        return this.http.post(this.baseURL + 'user/login', data)
    }
    checkuser(id: string): any {
        return this.http.post(this.baseURL + 'user/checkuser/' + id, {})
    }


    // Category

    addCatergory(formData: any): any {
        this.getHeaders();
        return this.http.post(this.baseURL + 'category/add', formData, this.headers)
    }

    updateCatergory(id: string, formData: any): any {
        this.getHeaders();
        return this.http.put(this.baseURL + 'category/update/' + id, formData, this.headers)
    }

    updateCatergoryImage(id: string, formData: any): any {
        this.getHeaders();
        return this.http.put(this.baseURL + 'category/updateimg/' + id, formData, this.headers)
    }

    changeCatergoryStatus(id: string, formData: any): any {
        this.getHeaders();
        return this.http.put(this.baseURL + 'category/status/' + id, formData, this.headers)
    }

    getAllCategory(): any {
        return this.http.get<CategoryRes>(this.baseURL + 'category/get');
    }

    getOneCategory(id: string): any {
        return this.http.get<CategoryRes>(this.baseURL + 'category/get' + id);
    }

    deleteCategory(id: string): any {
        this.getHeaders();
        return this.http.delete<CategoryRes>(this.baseURL + 'category/delete/' + id, this.headers);
    }



    // Sub Category

    addSubCatergory(formData: any): any {
        this.getHeaders();
        return this.http.post(this.baseURL + 'subcategory/add', formData, this.headers)
    }
    getAllSubCategory(): any {
        return this.http.get<SubCategoryRes>(this.baseURL + 'subcategory/get');
    }
    getOneSubCategory(id: string): any {
        return this.http.get<SubCategoryRes>(this.baseURL + 'subcategory/get/' + id);
    }
    getSubCategoryByCategory(catId: string): any {
        return this.http.get<SubCategoryRes>(this.baseURL + 'subcategory/getbycategory/' + catId);
    }
    updateSubCatergory(id: string, formData: any): any {
        this.getHeaders();
        return this.http.put(this.baseURL + 'subcategory/update/' + id, formData, this.headers)
    }
    updateSubCatergoryImage(id: string, formData: any): any {
        this.getHeaders();
        return this.http.put(this.baseURL + 'subcategory/updateimg/' + id, formData, this.headers)
    }
    changeSubCatergoryStatus(id: string, formData: any): any {
        this.getHeaders();
        return this.http.put(this.baseURL + 'subcategory/status/' + id, formData, this.headers)
    }
    deleteSubCategory(id: string): any {
        this.getHeaders();
        return this.http.delete<CategoryRes>(this.baseURL + 'subcategory/delete/' + id, this.headers);
    }



    // Products

    getAllProduct(): any {
        return this.http.get<any>(this.baseURL + 'product/get');
    }
    getProductsByLimit(limit : number, skip : number): any {
        return this.http.get<any>(this.baseURL + `product/get/${limit}/${skip}`);
    }
    getProduct(id : string): any {
        return this.http.get<any>(this.baseURL + 'product/get/' + id);
    }

    addProduct(data : Product):any {
        this.getHeaders();
        return this.http.post<any>(this.baseURL +  'product/add' , data, this.headers)
    }
    
    deleteProduct(id: string): any {
        this.getHeaders();
        return this.http.delete<Product>(this.baseURL + 'product/delete/' + id, this.headers);
    }

    // Colors

    getAllColors(): Observable<ColorRes> {
        return this.http.get<ColorRes>(this.baseURL + 'color/getAll');
    }
    addColor(data: Color): any {
        this.getHeaders();
        return this.http.post<ColorRes>(this.baseURL + 'color/add', data, this.headers)
    }
    deleteColor(id: string): any {
        this.getHeaders();
        return this.http.delete<ColorRes>(this.baseURL + 'color/delete/' + id, this.headers);
    }


    // Sizes

    getAllSizes(): Observable<SizeRes> {
        return this.http.get<SizeRes>(this.baseURL + 'size/getAll');
    }
    addSize(data: any): any {
        this.getHeaders();
        return this.http.post<SizeRes>(this.baseURL + 'size/add', data, this.headers)
    }
    deleteSize(id: string): any {
        this.getHeaders();
        return this.http.delete<SizeRes>(this.baseURL + 'size/delete/' + id, this.headers);
    }

}