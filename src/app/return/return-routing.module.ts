import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnComponent } from './return.component';

const routes: Routes = [{ path: '', component: ReturnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnRoutingModule { }
