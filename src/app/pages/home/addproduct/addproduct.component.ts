import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';
import { MessageService } from 'src/app/providers/message/message.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  fileName: any;
  base64: any;
  categoryList: any = [];
  selectMasterCategory:any;
  selectMainCategory:any;
  selectCategory:any;
  product:FormGroup;
  pageName:any;
  productDetails:any;
  selectedimages:any;
  profile:any;
  constructor(private api: ApiService,
    private route:ActivatedRoute,
    private messageService:MessageService) {
      let logindetails: any = localStorage.getItem('profile')
      this.profile = JSON.parse(logindetails);
    this.product = new FormGroup({
      pId: new FormControl('', Validators.required),
      pName: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      mtown: new FormControl('', Validators.required),
      subtown: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required]),
      offer: new FormControl('', [Validators.required]),
      descpription: new FormControl(null, Validators.required),
      vendorName :  new FormControl(null, Validators.required)
    });
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.pageName = params['pageName']
      if (this.pageName == 'edit') {
        // this.productDetails = JSON.parse(params['product']);
        this.productDetails = this.messageService.getProductDetails();
        this.product = new FormGroup({
          pId: new FormControl(this.productDetails?.pId, Validators.required),
          pName: new FormControl(this.productDetails?.pName, Validators.required),
          stock: new FormControl( this.productDetails?.stock, Validators.required),
          mtown: new FormControl( this.productDetails?.mtown, Validators.required),
          subtown: new FormControl( this.productDetails?.subtown, Validators.required),
          price: new FormControl( this.productDetails?.price, [Validators.required]),
          // offer: new FormControl( this.productDetails?.offer, [Validators.required]),
          descpription: new FormControl( this.productDetails?.descpription, Validators.required),
          vendorName: new FormControl( this.productDetails?.vendorName, [Validators.required])
          
        });
      }
    });
    this.getCategory()
  }

  

  onFileChange(e: any) {
    console.log("imagezzz",e)
    let files = e.target.files;
    this.selectedimages = e.target.files[0];
    for (let file of files) {
      this.fileName = file.name;
      var reader = new FileReader();
      reader.onload = (e) => {
        this.base64 = e.target?.result;
      }
      reader.readAsDataURL(file);
    }
  }



  getCategory() {
    this.api.getCategory().subscribe((data: any) => {
      this.categoryList = data;
      if(this.pageName == 'edit'){
        this.selectMastercategory({value:this.productDetails?.mtown})
      }
    });
   
   
  }

  selectMastercategory(ev: any) {
    let mastercategory = ev.value
    console.log("mastercatezz",mastercategory)
    for(let i in this.categoryList){
      if(mastercategory == this.categoryList[i].mainCategory){
        this.selectMasterCategory = this.categoryList[i];
        break;
      }
    }
    console.log(this.selectMasterCategory);
    if(this.pageName == 'edit'){
    this.selectMaincategory({value:this.productDetails?.subtown})
    }
   }

   selectMaincategory(ev: any){
     let mainCategory = ev.value
     console.log("mainCategory",mainCategory);
    for(let i in this.selectMasterCategory?.mainCategories){
      if(mainCategory == this.selectMasterCategory.mainCategories[i]){
        this.selectMainCategory = this.selectMasterCategory.mainCategories[i];
        break;
      }
    }
   }

   selectcategory(ev: any){
    let category =ev.value
    for(let i in this.selectMainCategory?.categories){
      if(category == this.selectMainCategory.categories[i].cName){
        this.selectCategory = this.selectMainCategory.categories[i];
        break;
      }
    }
   }

   createProduct() {
     let fb = new FormData();
     fb.set('productImage',this.selectedimages);
     fb.set('productId',this.product.value.pId);
     fb.set('productName',this.product.value.pName);
     fb.set('mainCategory',this.product.value.mtown);
     fb.set('subCategory',this.product.value.subtown);
     fb.set('stock',this.product.value.stock);
     fb.set('price',this.product.value.price);
     fb.set('description',this.product.value.descpription);
     fb.set('vendorName',this.product.value.vendorName);
    this.api.addProduct(fb).subscribe((data: any) => {
      this.api.openSnackBarAction("Product Added Sucessfully", 'Ok');
      console.log('Product Added Sucessfully')
      console.log("datazzz",data);
    });
  }

  updateProduct() {
    let body: any = {};
    body.pId = this.product.value.pId,
    body.pName = this.product.value.pName,
    body.stock = this.product.value.stock,
    body.mtown = this.product.value.mtown,
    body.subtown = this.product.value.subtown,
    body.price = this.product.value.price,
    body.offer = this.product.value.offer,
    body.descpription = this.product.value.descpription,
    body.vendorName = this.product.value.vendorName,
    this.api.updateProduct(body).subscribe((data: any) => {
      this.api.openSnackBarAction("Product Updated Sucessfully", 'Ok');
      console.log('Product Updated Sucessfully')
    });
  }
}
