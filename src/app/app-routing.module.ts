import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//App routes modules
import { AccountRoutingModule } from '@account/account-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), AccountRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
