import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdduserComponent } from '../userComponent/adduser/adduser.component';
import { UsersmanageComponent } from '../userComponent/usersmanage/usersmanage.component';

import { TestComponent } from '../userComponent/test/test.component';
import { UpdateUserComponent } from '../userComponent/update-user/update-user.component';







const routes: Routes = [

  {path:'users/update/:id',component:UpdateUserComponent},
  
  {path:'users',component:UsersmanageComponent},

  {path:'users/add',component:AdduserComponent},
  {path:'users/test/:id',component:TestComponent},
  
  { path: '**', redirectTo: 'not-found' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
