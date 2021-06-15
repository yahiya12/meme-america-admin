import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbannerComponent } from './addbanner.component';

const routes: Routes = [{ path: '', component: AddbannerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddbannerRoutingModule { }
