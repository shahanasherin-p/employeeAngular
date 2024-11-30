import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'employee',component:EmployeeListComponent}
];
