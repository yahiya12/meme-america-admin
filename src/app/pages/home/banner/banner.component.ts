import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';
import { MessageService } from 'src/app/providers/message/message.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  mobileSliderList:any = [];
  webSliderList:any = [];
  constructor(private api: ApiService,
    private router:Router,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.getWebSlider();
  }

  onClick(event: any) {
    console.log(event.tab.textLabel);
     if (event.tab.textLabel == "Web") {
      this.getWebSlider()
    }
  }

 
  getWebSlider() {
    this.api.getWebSlider().subscribe((data: any) => {
      this.webSliderList = data;
      console.log(this.webSliderList)
    });
  }

 

  goToAddWebBanner() {
    let navigationExtras: any = {
      queryParams: {
        pageName: 'createWebBanner',
      }
    }
    this.router.navigate(['home/banner/addbanner'], navigationExtras);
  }

  goToEditWebBanner(i: any) {
    let navigationExtras: any = {
      queryParams: {
        pageName: 'editWebBanner',
      }
    }
    let banner: any = JSON.stringify(this.webSliderList[i])
    this.messageService.setBannerDetails(banner);
    this.router.navigate(['home/banner/addbanner'], navigationExtras);
  }



  deleteWebSlider(i: any) {
    let body: any = {}
    body.id = this.webSliderList[i]._id
    this.api.deleteWebSlider(body).subscribe((data: any) => {
      // console.log(data)
      this.webSliderList.splice(i, 1)
      this.api.openSnackBarAction("Banner Deleted Sucessfully", 'Ok');
      console.log('Banner Deleted Sucessfully')
    });
  }


}


