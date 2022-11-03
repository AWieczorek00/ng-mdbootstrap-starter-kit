import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { MdbAccordionModule } from "mdb-angular-ui-kit/accordion";
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { MdbCheckboxModule } from "mdb-angular-ui-kit/checkbox";
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { MdbModalModule } from "mdb-angular-ui-kit/modal";
import { MdbPopoverModule } from "mdb-angular-ui-kit/popover";
import { MdbRadioModule } from "mdb-angular-ui-kit/radio";
import { MdbRangeModule } from "mdb-angular-ui-kit/range";
import { MdbRippleModule } from "mdb-angular-ui-kit/ripple";
import { MdbScrollspyModule } from "mdb-angular-ui-kit/scrollspy";
import { MdbTabsModule } from "mdb-angular-ui-kit/tabs";
import { MdbTooltipModule } from "mdb-angular-ui-kit/tooltip";
import { MdbValidationModule } from "mdb-angular-ui-kit/validation";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HttpProductServiceModule,
  InMemoryProductContextStorageModule,
  LoadAllProductsResolverModule,
  ProductStateModule
} from "@basket";
import { HttpClientModule } from "@angular/common/http";
import {
  LOADS_ALL_PRODUCTS_COMMAND_PORT
} from "../../libs/basket/src/lib/application/ports/primary/command/loads-all-products.command-port";
import { ProductState } from "../../libs/basket/src/lib/application/product.state";
import { CheckoutEventListenerModule } from "@checkout";
import {
  CHANGES_SUMMARY_COMMAND_PORT
} from "../../libs/checkout/src/lib/application/ports/primary/command/changes-summary-command.port";
import { CheckoutState } from "../../libs/checkout/src/lib/application/checkout.state";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    // LoadAllProductsResolverModule,
    // HttpProductServiceModule,
    // InMemoryProductContextStorageModule,
    HttpClientModule,
    // ProductStateModule,
    // CheckoutEventListenerModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
