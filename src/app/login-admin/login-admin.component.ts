import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-admin',
    templateUrl: './login-admin.component.html',
    styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {

    constructor(private _calldata: DataService, private router: Router) { }

    login() {
        // let data = {
        //     "email" : "testuser1@mail.com",
        //     "password" : "user123456"  
        // }
        let data = {
            "email": "admin@mail.com",
            "password": "admin123456"
        }
        this._calldata.login(data).subscribe(
            (res: any) => {
                // console.log(res)
                sessionStorage.setItem('auth-token', res.token)
                // sessionStorage.setItem('_id', res.id)
                this.checkUser(res.id);
                setTimeout(() => {
                    this.router.navigate(['/admin/dashboard']);
                }, 1000);
            }
        )
    }
    checkUser(data:string) {
        this._calldata.checkuser(data).subscribe(
            (res: any) => {
                console.log('ckecking admin', res.data.isAdmin)
                if (res.data.isAdmin) {
                    sessionStorage.setItem('user', 'vbajlksdfhuwasdzxffefqfa')
                } else {
                    sessionStorage.setItem('user', 'fajahlguewiglajcnhfcfhnj')
                }
            }
        )
    }
}
