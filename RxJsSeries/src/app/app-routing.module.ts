import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'promise', component:PromiseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
