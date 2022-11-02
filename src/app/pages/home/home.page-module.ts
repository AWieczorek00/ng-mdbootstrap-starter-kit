import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import {CheckoutComponentModule, CheckoutStateModule, InMemorySummaryContextStorageModule} from "@checkout";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CheckoutComponentModule, CheckoutStateModule, InMemorySummaryContextStorageModule,
  RouterModule.forChild([{
    path:'',
    component:HomePage
  }])],
  declarations: [HomePage],
  providers: [],
  exports: [HomePage]
})
export class HomePageModule {
}
