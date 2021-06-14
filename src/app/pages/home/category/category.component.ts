import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';
import { MessageService } from 'src/app/providers/message/message.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryList:any = [];
  profile:any;
  constructor(private api:ApiService,
    private router:Router,
    private messageService:MessageService) { }

  ngOnInit(): void {
    let logindetails:any =localStorage.getItem('profile')
    this.profile = JSON.parse(logindetails);
    this.getCategory();
  }
  getCategory() {
    this.api.getCategory().subscribe((data: any) => {
      console.log(data)
      this.categoryList = data;
    });
  }

  
  goToEditCategory(i:any){
    let navigationExtras: any = {
      queryParams: {
        pageName:'edit',
      }
    }
    let category: any = JSON.stringify(this.categoryList[i])
    this.messageService.setCategoryDetails(category);
    this.router.navigate(['home/category/addcategory'],navigationExtras);
  }
  goToCategory(){
    let navigationExtras: any = {
      queryParams: {
        pageName:'create',
      }
    }
    this.router.navigate(['home/category/addcategory'],navigationExtras);
  }
}
