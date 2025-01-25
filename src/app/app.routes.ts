import { Routes } from '@angular/router';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    // {
    //   path:'',
    //   redirectTo:'login',
    //   pathMatch:'full'  
    // },
    // {
    //     path:'login',
    //     component:LoginComponent
    // },
    // {
    //     path:'',
    //     component:LayoutComponent,
    //     children:[
    //         {
    //             path:'add-emp',
    //             component: AddEmployeComponent
    //         },
    //         {
    //             path:'data-binding',
    //             component:DatabindingComponent
    //         },
    //         {
    //             path:'emp-list',
    //             component:EmployeelistComponent
    //         }
    //     ]
    // },

    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    
];
