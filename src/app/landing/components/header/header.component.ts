import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isCart : boolean = false;
  showSearch: boolean = false;

  isLogin : string | null;
  constructor(
    private router : Router,
  ) {
    this.isLogin = sessionStorage.getItem('user')
  }
  
  openSearch() {
    this.showSearch = true;
  }

  closeSearch() {
    this.showSearch = false;
  }


  logout(){
    sessionStorage.setItem('user', '')
    sessionStorage.setItem('auth-token', '')
    this.isLogin = sessionStorage.getItem('user')
    this.router.navigate(['/home'])    
  }
}
