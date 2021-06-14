import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';
import { MessageService } from 'src/app/providers/message/message.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {
  category: any = {};
  pageName: any;
  fileName: any;
  base64: any;
  maincategoryfileName: any;
  maincategorybase64: any;
  masterName: any;
  mainCatName: any;
  childCatName: any;
  selectedmaincatId: any;
  selectedMasterimages: any;
  selectedMainimages: any;
  profile:any;
  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private messageService:MessageService) {
      let logindetails:any =localStorage.getItem('profile')
      this.profile = JSON.parse(logindetails);
    this.route.queryParams.subscribe((params: any) => {
      this.pageName = params['pageName']
      if (this.pageName == 'edit') {
        this.category = this.messageService.getCategoryDetails();
      }
    });
  }

  ngOnInit(): void {
  }

  onFileChange(e: any) {
    let files = e.target.files;
    this.selectedMasterimages = e.target.files[0];
    for (let file of files) {
      this.fileName = file.name;
      var reader = new FileReader();
      reader.onload = (e) => {
        this.base64 = e.target?.result;
      }
      reader.readAsDataURL(file);
    }
  }

  onFileMainCategoryChange(e: any) {
    let files = e.target.files;
    this.selectedMainimages = e.target.files[0];
    for (let file of files) {
      this.maincategoryfileName = file.name;
      var reader = new FileReader();
      reader.onload = (e) => {
        this.maincategorybase64 = e.target?.result;
      }
      reader.readAsDataURL(file);
    }
  }

  addCategory() {
    let fb = new FormData();
    fb.append('file', this.selectedMasterimages)
    let body: any = {};
    body.masterName = this.masterName,
    body.file = fb;
    
  }

  addSubCategory() {
    let fb = new FormData();
    fb.append('file', this.selectedMainimages)
    let body: any = {};
    body.masterId = this.category.masterId,
    body.mainCatName = this.mainCatName,
    body.file = fb;
  
  }

  addChildCategory() {
    let body: any = {};
    body.maincatId = this.selectedmaincatId,
      body.cName = this.childCatName
    // body.pwd = 
    
  }

 
}
