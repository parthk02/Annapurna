import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  navs = [
  {
    title: 'Dashboard',
    link: '/admin/dashboard',
    icon: 'home-outline'
  },
  {
    title : 'Category',
    link: '/admin/category',
    icon:'grid-outline'
  },
  {
    title : 'Sub Category',
    link: '/admin/subcategory',
    icon:'apps-outline'
  },
  {
    title : 'Products',
    link: '/admin/products',
    icon:'book-outline'
  },
  {
    title : 'Attribute',
    link: '/admin/attribute',
    icon:'book-outline'
  }

];



isSideBarOpen : boolean = false;
}
