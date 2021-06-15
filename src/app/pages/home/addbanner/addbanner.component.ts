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

  addWebBanner(){
    let fb = new FormData();
    fb.set('bannerImage',this.selectedimages);
    this.api.addWebSlider(fb).subscribe((data: any) => {
      // this.category = data;
      this.api.openSnackBarAction("WebBanner added Sucessfully", 'Ok');
      console.log(' WebBanner added Sucessfully')
    });
  }

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
