import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalComponent } from './normal/normal.component';

const routes: Routes = [
  {
    path: 'normal', component: NormalComponent, pathMatch: 'full'
  },
 // { path: 'check', loadChildren: () => import('./check/check.module.ngfactory').then(m => m.CheckModuleNgFactory), pathMatch:'full' },
// { path: 'return', loadChildren: () => import('./return/return.module.ngfactory').then(m => m.ReturnModuleNgFactory), pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
