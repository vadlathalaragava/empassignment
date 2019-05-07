import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpListComponent} from './emp-list/emp-list.component';
import {EmpAddComponent} from './emp-add/emp-add.component';
import {EmpUpdateComponent} from './emp-update/emp-update.component';

const routes: Routes = [
  {
    path:'emp-list',
    component:EmpListComponent
  },
  {
    path:'emp-add',
    component:EmpAddComponent
  },
  {
    path:'emp-update',
    component:EmpUpdateComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/emp-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
