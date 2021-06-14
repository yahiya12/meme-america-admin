import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

const adminLoginAPI = "http://localhost:8080/homecraft/login";
const getProductsAPI = "http://localhost:8080/homecraft/products";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  production: string = "http://15.207.73.162:8080";
  ipAddress: string = this.production;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  apiHeader: any;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar,
    private datePipe: DatePipe,) {
    this.apiHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  // Date Format
  dateToSavingStringFormatConvertion(currentDate: Date) {
    let datewithouttimezone: Date = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds());
    return this.datePipe.transform(datewithouttimezone, 'yyyy-MM-dd');
  }

  // Toast
  public openSnackBarAction(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    console.log(message)
  }

  public openSnackBarActionCorner(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    console.log(message)
  }

  // Add Product
  public addProduct(data: any): Observable<any> {
    const url = 'http://localhost:8080/homecraft/product/new';
    return this.http.post<any>(url, data,{responseType: 'text' as 'json'});
  }

  

  // Get Products
  public getProduct(): Observable<any> {
    // const url = this.getProductsAPI;
    return this.http.get<any>("http://localhost:8080/homecraft/products");
  }


  // Delete Product
  public deleteProduct(data: any): Observable<any> {
    const url = 'http://localhost:8080/homecraft/delete/'+ data.id;
    return this.http.delete<any>(url);
  }

  //Update Product
   // Update Product
   public updateProduct(data: any): Observable<any> {
    const url = this.ipAddress + '/homecraftV1.0/homecraft/products/offers';
    return this.http.post<any>(url, null, { params: data, responseType: 'text' as 'json' });
  }

  // Login Admin
  public loginAdmin(data: any): Observable<any> {
    console.log("data", data)
    let admin = {
      username: data.username,
      password: data.password
    }
    return this.http.post<any>(adminLoginAPI, admin,{responseType: 'text' as 'json'});
  }



  
  // Get Category
  public getCategory(): Observable<any> {
    const url = 'http://localhost:8080/homecraft/menu/category';
    return this.http.get<any>(url);
  }


 


  



  

 







 


}
