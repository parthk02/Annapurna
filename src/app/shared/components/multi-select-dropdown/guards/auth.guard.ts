import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../../../services/data.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard  {
    constructor(private router: Router, private calldata: DataService) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.isLoggedIn()== 'vbajlksdfhuwasdzxffefqfa') {
            console.log(true);
            // this.checkUser();
            return true;
            this.router.navigate(['/admin/dashboard'])
        } else {
            // this.checkUser();
            console.log('FASLE');
            this.router.navigate(['/admin/login']);
            return false;
        }

    }

    isLoggedIn() {
        console.log('logged in', sessionStorage.getItem('user'));   
        return sessionStorage.getItem('user');
    }

}
