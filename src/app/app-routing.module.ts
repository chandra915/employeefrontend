import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeHomeComponent } from './components/employee-home/employee-home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
{
  path: "home",
  component: EmployeeHomeComponent
},{
  path: "emp-list",
  component: EmployeeListComponent
},{
  path: "emp-add",
  component: EmployeeAddComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
