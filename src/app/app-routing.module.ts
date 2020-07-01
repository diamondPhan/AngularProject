import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  //{path:"content", component: ContentComponent },
  {path:"", component: LoginComponent },
  //{path:"**", component: LoginComponent },
  {path:"login",component:LoginComponent},
  //{path:"register", component: RegisterComponent},

  {path:"admin", component:MainlayoutComponent,
  canActivate:[AuthGuard],//khai báo guard dùng để ràng buộc phải đăng nhập mới được vào
  children:[
    {path:"register", component: RegisterComponent},
    {path:"product", component:ProductComponent}, 
    {path:"content", component: ContentComponent },
    //{path:'', component: LoginComponent},         
    ]},
  {path:"**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
