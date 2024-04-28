import { Component , OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../myservices/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    email!:any;
    isLoggingIn= false;
    password!:any;
    constructor( private common: CommonService, private router: Router){}
//     islogin : boolean = true;
//     registerUserFG : FormGroup;
//     confirmPass : any;
//     constructor(
//         private _calldata : DataService,
//         private router : Router,
//         private _fb : FormBuilder
//     ){
//         this.registerUserFG = this._fb.group({
//             name : [ Validators.required],
//             email : [Validators.required, Validators.email],
//             phoneNumber : [Validators.required],
//             password : [Validators.required],
//         })
//     }

//     ngOnInit(){
//     }

//     login() {
//         let data = {
//             "email" : "testuser1@mail.com",
//             "password" : "user123456"  
//         }
        
//         this._calldata.login(data).subscribe(
//             (res: any) => {
//                 // console.log(res)
//                 sessionStorage.setItem('auth-token', res.token)
//                 // sessionStorage.setItem('_id', res.id)
//                 this.checkUser(res.id);
//                 setTimeout(() => {
//                     this.router.navigate(['/user']);
//                 }, 1000);
//             }
//         )
//     }
//     checkUser(data:string) {
//         this._calldata.checkuser(data).subscribe(
//             (res: any) => {
//                 console.log('ckecking admin', res.data.isAdmin)
//                 if (res.data.isAdmin) {
//                     sessionStorage.setItem('user', 'vbajlksdfhuwasdzxffefqfa')
//                 } else if(!res.data.isAdmin) {
//                     sessionStorage.setItem('user', 'fajahlguewiglajcnhfcfhnj')
//                 }
//             }
//         )
//     }

//     signup(){
    login(){
        var adminData = {
            email: this.email,
            password: this.password
        }
        this.isLoggingIn = true;
        this.common.login(adminData).subscribe(
            response =>{
                console.log('login sucessful',response);
                this.isLoggingIn = false;
                this.router.navigate(['/about']);
            },
            error=> {
                console.error('Error During Login',error);
                this.isLoggingIn = false;
            }
        );
    }

    }
    

