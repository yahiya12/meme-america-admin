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
  
  }

  onClick(event: any) {
    console.log(event.tab.textLabel);
    
  }

  

 

  goToAddMobileBanner() {
    let navigationExtras: any = {
      queryParams: {
        pageName: 'createMobileBanner',
      }
    }
    this.router.navigate(['home/banner/addbanner'], navigationExtras);
  }

  goToEditMobileBanner(i: any) {
    let navigationExtras: any = {
      queryParams: {
        pageName: 'editMobileBanner',
      }
    }
    let banner: any = JSON.stringify(this.mobileSliderList[i])
    this.messageService.setBannerDetails(banner);
    this.router.navigate(['home/banner/addbanner'], navigationExtras);
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

 

 

}


