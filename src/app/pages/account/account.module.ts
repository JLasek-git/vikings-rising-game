import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App modules
import { UiModule } from '@ui';
import { AccountRoutingModule } from './account-routing.module';

// Components
import { LoginComponent } from './containers/login/login.component';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [LoginComponent, AccountComponent],
  exports: [LoginComponent],
  imports: [CommonModule, AccountRoutingModule, UiModule],
})
export class AccountModule {}
