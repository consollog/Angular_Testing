import { Routes } from '@angular/router';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component: AddEmployeComponent
    },
    {
        path:'data-binding',
        component:DatabindingComponent
    },
    {
        path:'emp-list',
        component:EmployeelistComponent
    }
];
