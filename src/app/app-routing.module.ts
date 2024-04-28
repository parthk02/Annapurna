import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/home/home.component';
import { AboutComponent } from './landing/about/about.component';
import { ContactComponent } from './landing/contact/contact.component';
import { InspirationComponent } from './landing/about/inspiration/inspiration.component';
import { QualityassuranceComponent } from './landing/about/qualityassurance/qualityassurance.component';
import { CollectionComponent } from './landing/collection/collection.component';
import { AddtocartComponent } from './landing/addtocart/addtocart.component';
import { CheckoutComponent } from './landing/checkout/checkout.component';

import { ProductComponent } from './landing/product/product.component';
import { FaqsComponent } from './landing/faqs/faqs.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PrivacyPolicyComponent } from './landing/privacy-policy/privacy-policy.component';
import { BulkOrderComponent } from './landing/bulk-order/bulk-order.component';
import { RefundPolicyComponent } from './landing/refund-policy/refund-policy.component';
import { ShippingPolicyComponent } from './landing/shipping-policy/shipping-policy.component';
import { CategoryComponent } from './admin/category/category.component';
import { SubcategoryComponent } from './admin/subcategory/subcategory.component';
import { ShopComponent } from './landing/shop/shop.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AuthGuard } from './shared/components/multi-select-dropdown/guards/auth.guard';
import { ProductsComponent } from './admin/products/products.component';
import { AttributesComponent } from './admin/attributes/attributes.component';
import { UserComponent } from './landing/user/user.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './shared/components/multi-select-dropdown/guards/login.guard';
import { BlogsComponent } from './landing/blogs/blogs.component';
import { PanelComponent } from './panel/panel.component';


// import { LoginGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'collection', component: CollectionComponent },
      { path: 'cart', component: AddtocartComponent },
      { path: 'checkout', component: CheckoutComponent },

      { path: 'about/inspiration', component: InspirationComponent },
      { path: 'about/blog', component: BlogsComponent },
      { path: 'about/qualityassurance', component: QualityassuranceComponent },

      { path: 'faqs', component: FaqsComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'product/:slug', component: ProductComponent },
      { path: 'bulk-orders', component: BulkOrderComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'refund-policy', component: RefundPolicyComponent },
      { path: 'shipping-policy', component: ShippingPolicyComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'shop/:categoryId', component: ShopComponent },
      { path: 'login',component: LoginComponent},
      { path: 'Blog',component: BlogsComponent},
      { path: 'panel',component: PanelComponent}
    ],
  },
  {
    path: '',
    component: LandingComponent,
    canActivate : [LoginGuard],
    children: [
      { path: 'user',  component: UserComponent},
    ],
  },
  // Admin routes
  // {path : 'login', component : LoginAdminComponent},
  {path : 'admin/login', component : LoginAdminComponent},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate :[AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'subcategory', component: SubcategoryComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'attribute', component: AttributesComponent },
      
    ],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
