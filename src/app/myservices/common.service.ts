import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { 
  }
  PostFormData(formdata:any){
    return this.http.post("http://127.0.0.1:8000/api/client",formdata).toPromise();
  }
  Formdata(formsdata:any){
    return this.http.post("http://127.0.0.1:8000/api/reqfood",formsdata).toPromise();
  }
  contactus(condata:any){
    return this.http.post("http://127.0.0.1:8000/api/contact",condata).toPromise();
  }
  regformdata(fomdata:any){
    return this.http.post("http://127.0.0.1:8000/api/register",fomdata).toPromise();
  }
  pickup(pick:any){
    return this.http.post("http://127.0.0.1:8000/api/fortime",pick).toPromise();
  }
  remove(del:any){
    return this.http.post("http://127.0.0.1:8000/api/forremove",del).toPromise();
  }
  login(adminData: object){
    return this.http.post('http://127.0.0.1:8000/api/login',adminData);
  }
}
