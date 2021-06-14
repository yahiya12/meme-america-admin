import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginadminRoutingModule } from './loginadmin-routing.module';
import { LoginadminComponent } from './loginadmin.component';
import { HeaderModule } from '../header/header.module';
import { MaterialModule } from 'src/app/providers/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginadminComponent
  ],
  imports: [
    CommonModule,
    LoginadminRoutingModule,
    HeaderModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class LoginadminModule { }
