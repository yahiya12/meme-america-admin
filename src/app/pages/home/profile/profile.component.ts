import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';
import { MessageService } from 'src/app/providers/message/message.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  orderList: any = [];
  constructor(private api: ApiService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    
  }

 

  goToTotalOrder() {
    let navigationExtras: any = {
      queryParams: {
       pageName:'TotalOrder'
      }
    }
    let order:any= JSON.stringify(this.orderList.ordersList)
    this.messageService.setMainOrderDetails(order);
    this.router.navigate(['home/profile/mainorder'],navigationExtras);
  }

  goToPendingOrder() {
    let navigationExtras: any = {
      queryParams: {
       pageName:'Pending'
      }
    }
    let order:any= JSON.stringify(this.orderList.ordersProgress)
    this.messageService.setMainOrderDetails(order);
    this.router.navigate(['home/profile/mainorder'],navigationExtras);
  }
  goToCompleteOrder() {
    let navigationExtras: any = {
      queryParams: {
       pageName:'Complete'
      }
    }
    let order:any= JSON.stringify(this.orderList.ordersCompleted)
    this.messageService.setMainOrderDetails(order);
    this.router.navigate(['home/profile/mainorder'],navigationExtras);
  }
  goToCancellOrder() {
    let navigationExtras: any = {
      queryParams: {
       pageName:'cancell'
      }
    }
    let order:any= JSON.stringify(this.orderList.ordersCanceled)
    this.messageService.setMainOrderDetails(order);
    this.router.navigate(['home/profile/mainorder'],navigationExtras);
  }
}
