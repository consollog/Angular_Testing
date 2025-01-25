import { Routes } from '@angular/router';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { HomeComponent } from './components/home/home.component';
import { Login2Component } from './components/login2/login2.component';
import { LogiForGuardComponent } from './components/logi-for-guard/logi-for-guard.component';
import { authGuard } from './service/auth.guard';
import { HomeForGuardComponent } from './components/home-for-guard/home-for-guard.component';

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

    // { path: '', component: Login2Component },
    // { path: 'home', component: HomeComponent },

    { path: '', component: HomeForGuardComponent },  // Home route
    { path: 'login', component: LogiForGuardComponent, canActivate: [authGuard] },
    
];
