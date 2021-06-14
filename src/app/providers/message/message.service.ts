import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
function _window():any{
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  get nativeWindow() : any{
    return _window();
  }
   orderDetails: any;
  mainorderDetails:any;
  viewmainorderDetails:any;
  customerDetails:any;
  customerOrderDetails:any;
  productDetails:any;
  categoryDetails:any;
  bannerDetails:any;
  constructor() {

  }

 

  // Order
  public setOrderDetails(orderDetails: any) {
    this.orderDetails = JSON.parse(orderDetails);
  }

  public getOrderDetails(): Observable<any> {
    return this.orderDetails;
  }

  // Profile Order
  public setMainOrderDetails(orderDetails: any) {
    this.mainorderDetails = JSON.parse(orderDetails);
  }

  public getMainOrderDetails(): Observable<any> {
    return this.mainorderDetails;
  }

  public setMainViewOrderDetails(orderDetails: any) {
    this.viewmainorderDetails = JSON.parse(orderDetails);
  }

  public getMainViewOrderDetails(): Observable<any> {
    return this.viewmainorderDetails;
  }

  // Customer Order

  public setCustomerDetails(customerDetails: any) {
    this.customerDetails = JSON.parse(customerDetails);
  }

  public getCustomerDetails(): Observable<any> {
    return this.customerDetails;
  }

  public setCustomerOrderDetails(customerorderDetails: any) {
    this.customerOrderDetails = JSON.parse(customerorderDetails);
  }

  public getCustomerOrderDetails(): Observable<any> {
    return this.customerOrderDetails;
  }

   // Product

   public setProductDetails(productDetails: any) {
    this.productDetails = JSON.parse(productDetails);
  }

  public getProductDetails(): Observable<any> {
    return this.productDetails;
  }

  // Category

  public setCategoryDetails(categoryDetails: any) {
    this.categoryDetails = JSON.parse(categoryDetails);
  }

  public getCategoryDetails(): Observable<any> {
    return this.categoryDetails;
  }

    // Banner

    public setBannerDetails(bannerDetails: any) {
      this.bannerDetails = JSON.parse(bannerDetails);
    }
  
    public getBannerDetails(): Observable<any> {
      return this.bannerDetails;
    }
}
