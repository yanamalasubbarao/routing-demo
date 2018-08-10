import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserformComponent } from './userform/userform.component';
import { UserService } from './shared_service/user.service';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ListuserComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
