import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { TdfComponent } from './tdf/tdf.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"", component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  {path:"reactive-forms", component:ReactiveFormsComponent},
  {path:"tdf", component:TdfComponent},
  {path:"switchCase",component:SwitchCaseComponent},
  {path:"wildcard",component:WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRoutings =[
  LoginComponent,
  LogoutComponent,
  DashboardComponent,
  ReactiveFormsComponent,
  TdfComponent,
  SwitchCaseComponent,
  WildcardComponent
]
