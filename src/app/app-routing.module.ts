import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  { path: 'employees', component: UserformComponent},
  { path: '', component: ListuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListuserComponent, UserformComponent]
