import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable, take } from "rxjs";
import { ProductQuery } from '../../../../application/ports/primary/query/product.query';
import { GETS_ALL_PRODUCT_QUERY_PORT, GetsAllProductQueryPort } from '../../../../application/ports/primary/query/gets-all-product.query-port';
import { REMOVE_PRODUCT_COMMAND_PORT, RemoveProductCommandPort } from '../../../../application/ports/primary/command/remove-product.command-port';

@Component({
  selector: 'lib-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly products$: Observable<ProductQuery[]> = this._getsAllProductQueryPort.GetAllProductQuery();

  constructor(@Inject(GETS_ALL_PRODUCT_QUERY_PORT) private _getsAllProductQueryPort: GetsAllProductQueryPort, @Inject(REMOVE_PRODUCT_COMMAND_PORT) private _removeProductCommandPort: RemoveProductCommandPort) {
  }

  onTrashIconClicked(product: ProductQuery): void {
    this._removeProductCommandPort.removeProduct({ productName: product.title }).pipe(take(1)).subscribe();
  }
}
