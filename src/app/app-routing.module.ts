import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmentorComponent } from './cmentor/cmentor.component';
import { CstudentComponent } from './cstudent/cstudent.component';
import { AssignComponent } from './assign/assign.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [{
  path:'',
  component:CstudentComponent
},{
  path:'create-mentor',
  component: CmentorComponent
},{
  path:'assign',
  component:AssignComponent
},{
  path:'update',
  component:UpdateComponent
},{
  path:'list',
  component:ListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
