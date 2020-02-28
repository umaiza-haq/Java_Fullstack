import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosComponent } from './demos/demos.component';
import { OffersComponent } from './offers/offers.component';
import { ManageComponent } from './manage/manage.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../common/login/login.component';
import { UserComponent } from '../common/user/user.component';


const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"demos",component:DemosComponent},
  {path:"offers",component:OffersComponent},
  {path:"manage",component:ManageComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"manageuser",component:LoginComponent},
  {path:"register",component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
