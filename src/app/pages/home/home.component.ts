import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { profile } from 'node:console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
selectsegment:any = 'profile';
profile:any;
  constructor(private router:Router) { 
    let logindetails:any =localStorage.getItem('profile')
    this.profile = JSON.parse(logindetails);
    if(localStorage.getItem('profile') == null || localStorage.getItem('profile') =='' || localStorage.getItem('profile') == undefined || localStorage.getItem('profile') == 'null'){
      this.router.navigate(['/loginadmin']);
    }
    console.log(this.profile)
  }

  ngOnInit(): void {
  }
  select(value:any){
    this.selectsegment = value
    if(this.selectsegment == 'logout'){
      localStorage.clear()
      // this.router.navigateByUrl('registration');
      this.router.navigate(['/loginadmin']);
      // this.router.ngOnDestroy('welcome');
    }
  }
}
