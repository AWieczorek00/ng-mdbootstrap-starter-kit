import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SummaryLineQuery } from '../../../../application/ports/primary/query/summary-line.query';
import {
  GETS_SUMMARY_LINE_QUERY_PORT,
  GetsSummaryLineQueryPort,
} from '../../../../application/ports/primary/query/gets-summary-line.query-port';

@Component({
  selector: 'lib-checkout',
  styleUrls: ['./checkout.component.scss'],
  templateUrl: './checkout.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  readonly cardFrom: FormGroup = new FormGroup({
    cardHolder: new FormControl(),
    cardNumber: new FormControl(),
    cardExpiry: new FormControl(),
    cardCvv: new FormControl(),
  });
  readonly summaryLines$: Observable<SummaryLineQuery[]> =
    this._getsSummaryLineQueryPort.getSummaryLines();

  readonly cards$ = of([
    'fa-cc-mastercard',
    'fa-cc-visa',
    'fa-cc-amex',
    'fa-cc-paypal',
  ]);

  constructor(
    @Inject(GETS_SUMMARY_LINE_QUERY_PORT)
    private _getsSummaryLineQueryPort: GetsSummaryLineQueryPort
  ) {}

  onCardFromSubmitted(cardFrom: FormGroup): void {}
}
