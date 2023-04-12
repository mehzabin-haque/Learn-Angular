import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductComponent } from './product/product.component';
import { BuyComponent } from './product/buy/buy.component';
// import { InvalidCredentialComponent } from './home/invalid-credential/invalid-credential.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './product/add-product/add-product.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"regi",component:RegistrationComponent},
  {path:"product",component:ProductComponent},
  {path:"buy",component:BuyComponent},
  // {path:"invalid-cred",component:InvalidCredentialComponent},
  {path:"profile",component:ProfileComponent},
  {path:"add",component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
