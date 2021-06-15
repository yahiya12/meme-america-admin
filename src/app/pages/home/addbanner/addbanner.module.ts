import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbannerRoutingModule } from './addbanner-routing.module';
import { AddbannerComponent } from './addbanner.component';


@NgModule({
  declarations: [
    AddbannerComponent
  ],
  imports: [
    CommonModule,
    AddbannerRoutingModule
  ]
})
export class AddbannerModule { }
