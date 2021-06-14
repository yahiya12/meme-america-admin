import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';
import { MessageService } from 'src/app/providers/message/message.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: any = [];
  profile:any;
  constructor(private api: ApiService,
    private router: Router,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  ngAfterViewInit() {
    let logindetails:any =localStorage.getItem('profile')
    this.profile = JSON.parse(logindetails);
    if(this.profile.role == 'Admin'){
      this.getProduct()
    }
  }


  getProduct() {
    this.api.getProduct().subscribe((data: any) => {
      console.log(data)
      this.productList = data;
    });
  }

  

  deleteProduct(i: any) {
    let body: any = {}
    body.id = this.productList[i].productId
    this.api.deleteProduct(body).subscribe((data: any) => {
      // console.log(data)
      this.productList.splice(i, 1)
      this.api.openSnackBarAction("Product Deleted Sucessfully", 'Ok');
      console.log('Product Deleted Sucessfully');
      this.getProduct()
    });
  }

  goToAddProduct() {
    let navigationExtras: any = {
      queryParams: {
        pageName: 'create',
      }
    }
    this.router.navigate(['home/product/addproduct'], navigationExtras);
  }

  goToEditProduct(i: any) {
    let navigationExtras: any = {
      queryParams: {
        pageName: 'edit',
      }
    }
    let product: any = JSON.stringify(this.productList[i])
    this.messageService.setProductDetails(product);
    this.router.navigate(['home/product/addproduct'], navigationExtras);
  }
}
