import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './landing/about/about.component';
import { ContactComponent } from './landing/contact/contact.component';
import { FaqsComponent } from './landing/faqs/faqs.component';
import { PrivacyPolicyComponent } from './landing/privacy-policy/privacy-policy.component';
import { ShopComponent } from './landing/shop/shop.component';
import { BulkOrderComponent } from './landing/bulk-order/bulk-order.component';
import { ProductComponent } from './landing/product/product.component';
import { ShippingPolicyComponent } from './landing/shipping-policy/shipping-policy.component';
import { RefundPolicyComponent } from './landing/refund-policy/refund-policy.component';
import { HeaderComponent } from './landing/components/header/header.component';
import { FooterComponent } from './landing/components/footer/footer.component';
import { CollectionComponent } from './landing/collection/collection.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CheckoutComponent } from './landing/checkout/checkout.component';
import { IonicModule } from '@ionic/angular';
import { TopBannerComponent } from './landing/components/top-banner/top-banner.component';
import { SwiperModule } from 'swiper/angular';
import { CategoryComponent } from './admin/category/category.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { BreadCrumbComponent } from './admin/bread-crumb/bread-crumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubcategoryComponent } from './admin/subcategory/subcategory.component';
import { AddSubcategoryComponent } from './admin/subcategory/add-subcategory/add-subcategory.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SwiperComponent } from './landing/components/swiper/swiper.component';
import { ProductsComponent } from './admin/products/products.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { MultiSelectDropdownComponent } from './shared/components/multi-select-dropdown/multi-select-dropdown.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AttributesComponent } from './admin/attributes/attributes.component';
import { AddColorComponent } from './admin/attributes/add-color/add-color.component';
import { AddSizeComponent } from './admin/attributes/add-size/add-size.component';
import { HttpClient } from '@angular/common/http';
import { BlogsComponent } from './landing/blogs/blogs.component';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { UserComponent } from './landing/user/user.component';
import { LoaderComponent } from './loader/loader.component';
import { InspirationComponent } from './landing/about/inspiration/inspiration.component';
import { QualityassuranceComponent } from './landing/about/qualityassurance/qualityassurance.component';
import { AddtocartComponent } from './landing/addtocart/addtocart.component';
import { PanelComponent } from './panel/panel.component';






@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LandingComponent,
    HomeComponent,
    AdminComponent,
    AboutComponent,
    ContactComponent,
    FaqsComponent,
    PrivacyPolicyComponent,
    ShopComponent,
    BulkOrderComponent,
    ProductComponent,
    ShippingPolicyComponent,
    RefundPolicyComponent,
    HeaderComponent,
    FooterComponent,
    CollectionComponent,
    DashboardComponent,
    CheckoutComponent,
    TopBannerComponent,
    SwiperComponent,
    CategoryComponent,
    AddCategoryComponent,
    BreadCrumbComponent,
    SubcategoryComponent,
    AddSubcategoryComponent,
    ProductsComponent,
    AddProductComponent,
    LoginComponent,
    LoginAdminComponent,
    MultiSelectDropdownComponent,
    AttributesComponent,
    AddColorComponent,
    AddSizeComponent,
    UserComponent,
    LoaderComponent,
    InspirationComponent,
    QualityassuranceComponent,
    AddtocartComponent,
    BlogsComponent,
    PanelComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    SwiperModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    CKEditorModule,
    
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
