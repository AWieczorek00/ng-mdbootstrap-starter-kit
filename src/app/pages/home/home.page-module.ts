import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import {
  CheckoutComponentModule,
  CheckoutStateModule,
  InMemorySummaryContextStorageModule,
} from '@checkout';
import {
  HttpProductServiceModule,
  InMemoryProductContextStorageModule,
  LoadAllProductsResolverModule,
  ProductEventDispatcherModule,
  ProductListComponentModule, ProductStateModule
} from "@basket";
import {
  CHANGES_SUMMARY_COMMAND_PORT
} from "../../../../libs/checkout/src/lib/application/ports/primary/command/changes-summary-command.port";
import { CheckoutState } from "../../../../libs/checkout/src/lib/application/checkout.state";

@NgModule({
  imports: [
    CheckoutComponentModule,
    CheckoutStateModule,
    InMemorySummaryContextStorageModule,
    ProductListComponentModule,
    ProductStateModule,
    HttpProductServiceModule,
    InMemoryProductContextStorageModule,
    ProductEventDispatcherModule,
  ],
  declarations: [HomePage],
  providers: [{provide:CHANGES_SUMMARY_COMMAND_PORT,useExisting:CheckoutState}],
  exports: [HomePage],
})
export class HomePageModule {}
