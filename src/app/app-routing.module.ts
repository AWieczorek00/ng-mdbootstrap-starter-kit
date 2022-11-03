import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HttpProductServiceModule,
  InMemoryProductContextStorageModule,
  LoadAllProductsResolver,
  LoadAllProductsResolverModule,
  ProductStateModule,
} from '@basket';
import { HomePageModule } from './pages/home/home.page-module';
import { HomePage } from './pages/home/home.page';
import { CheckoutEventListenerModule } from '@checkout';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: { loadAllProducts: LoadAllProductsResolver },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomePageModule,
    LoadAllProductsResolverModule,
    ProductStateModule,
    HttpProductServiceModule,
    InMemoryProductContextStorageModule,
    CheckoutEventListenerModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
