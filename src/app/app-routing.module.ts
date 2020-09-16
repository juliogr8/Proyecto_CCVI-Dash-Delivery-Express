import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderProgressComponent } from './components/order-progress/order-progress.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'order-progress', component: OrderProgressComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
