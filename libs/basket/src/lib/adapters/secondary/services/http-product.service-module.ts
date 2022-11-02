import { NgModule } from '@angular/core';
import { HttpProductService } from './http-product.service';
import { GETS_ALL_PRODUCTS_DTO_PORT } from '../../../application/ports/secondary/dto/gets-all-products.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [HttpProductService, { provide: GETS_ALL_PRODUCTS_DTO_PORT, useExisting: HttpProductService }],
  exports: []
})
export class HttpProductServiceModule {
}
