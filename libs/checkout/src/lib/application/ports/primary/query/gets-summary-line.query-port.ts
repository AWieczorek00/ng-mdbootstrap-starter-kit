import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryLineQuery } from './summary-line.query';

export const GETS_SUMMARY_LINE_QUERY_PORT = new InjectionToken<GetsSummaryLineQueryPort>('GETS_SUMMARY_LINE_QUERY_PORT');

export interface GetsSummaryLineQueryPort {
  getSummaryLines(): Observable<SummaryLineQuery[]>;
}
