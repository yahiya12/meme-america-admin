import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HeaderModule } from '../header/header.module';
import { MaterialModule } from 'src/app/providers/material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';

import { AddbannerComponent } from './addbanner/addbanner.component';




import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    CategoryComponent,
    ProductComponent,
    AddbannerComponent,
    AddproductComponent,
    AddcategoryComponent,
    BannerComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    MaterialModule,
  ]
})
export class HomeModule { }
