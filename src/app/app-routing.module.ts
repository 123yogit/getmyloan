import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { ApplyComponent } from './apply/apply.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { LoginComponent } from './login/login.component';
import { BusinessComponent } from './business/business.component';
import { VehicleloanComponent } from './vehicleloan/vehicleloan.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'personalloan',component:PersonalloanComponent},
  {path:'apply',component:ApplyComponent},
  {path:'homeloan',component:HomeloanComponent},
  {path:'login',component:LoginComponent},
  {path:'business',component:BusinessComponent},
  {path:'vehicleloan',component:VehicleloanComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
