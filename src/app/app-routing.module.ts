import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"cakes",component:CakelistComponent},
  {path:"cakes/:id",component:CakedetailComponent},
  {path:"",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
