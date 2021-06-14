import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CategoryComponent } from './category/category.component';

import { HomeComponent } from './home.component';


import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';







import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: ProfileComponent },
    
      { path: 'profile', component: ProfileComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
      
      
      
      
      { path: 'banner', component: BannerComponent },
      
      
      { path: 'product/addproduct', component: AddproductComponent},
      { path: 'category/addcategory', component: AddcategoryComponent},
    
      
      
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
