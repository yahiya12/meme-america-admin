import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';
import { MessageService } from 'src/app/providers/message/message.service';

@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.scss']
})
export class AddbannerComponent implements OnInit {
  status:any;
  pageName:any;
  banner:any;
  fileName:any;
  base64:any;
  selectedimages:any;
  profile:any;
  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private messageService:MessageService) {
      let logindetails: any = localStorage.getItem('profile')
      this.profile = JSON.parse(logindetails);
    this.route.queryParams.subscribe((params: any) => {
      this.pageName = params['pageName']
      if (this.pageName == 'editMobileBanner' || this.pageName == 'editWebBanner' ) {
        // this.category = JSON.parse(params['category']);
        this.banner = this.messageService.getBannerDetails();
        this.status = this.banner.status
      }
    });
  }

  ngOnInit(): void {
  }

  onFileChange(e: any) {
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

  addMobileBanner(){
    let fb = new FormData();
    fb.append('file', this.selectedimages)
    let body: any = {};
    body.status = this.status,
    body.shopId = this.profile.shopName,
    body.file = fb;
    this.api.addMobileSlider(body).subscribe((data: any) => {
      // this.category = data;
      this.api.openSnackBarAction("MobileBanner added Sucessfully", 'Ok');
      console.log('MobileBanner added Sucessfully')
    });
  }

  updateMobileBanner(){
    let body: any = {};
    body.banId = this.banner.banId,
    body.status = this.status,
    this.api.updateMobileSlider(body).subscribe((data: any) => {
      // this.category = data;
      this.api.openSnackBarAction("MobileBanner Updated Sucessfully", 'Ok');
      console.log('MobileBanner Updated Sucessfully')
    });
  }

  // addWebBanner(){
  //   let fb = new FormData();
  //   fb.append('file', this.selectedimages)
  //   let body: any = {};
  //   body.status = this.status,
  //   body.shopId = this.profile.shopName,
  //   body.file = fb;
  //   this.api.addWebSlider(body).subscribe((data: any) => {
  //     // this.category = data;
  //     this.api.openSnackBarAction("WebBanner added Sucessfully", 'Ok');
  //     console.log(' WebBanner added Sucessfully')
  //   });
  // }

  addWebBanner(){
    let fb = new FormData();
    fb.set('bannerImage',this.selectedimages);
    this.api.addWebSlider(fb).subscribe((data: any) => {
      // this.category = data;
      this.api.openSnackBarAction("WebBanner added Sucessfully", 'Ok');
      console.log(' WebBanner added Sucessfully')
    });
  }
//   createProduct() {
//     let fb = new FormData();
//     fb.set('productImage',this.selectedimages);
//     fb.set('productId',this.product.value.pId);
//     fb.set('productName',this.product.value.pName);
//     fb.set('mainCategory',this.product.value.mtown);
//     fb.set('subCategory',this.product.value.subtown);
//     fb.set('stock',this.product.value.stock);
//     fb.set('price',this.product.value.price);
//     fb.set('description',this.product.value.descpription);
//     fb.set('vendorName',this.product.value.vendorName);
//    this.api.addProduct(fb).subscribe((data: any) => {
//      this.api.openSnackBarAction("Product Added Sucessfully", 'Ok');
//      console.log('Product Added Sucessfully')
//      console.log("datazzz",data);
//    });
//  }


  updateWebBanner(){
    let body: any = {};
    body.banId = this.banner.banId,
    body.status = this.status,
    this.api.updateWebSlider(body).subscribe((data: any) => {
      // this.category = data;
      this.api.openSnackBarAction("WebBanner Updated Sucessfully", 'Ok');
      console.log(' WebBanner Updated Sucessfully')
    });
  }

}
