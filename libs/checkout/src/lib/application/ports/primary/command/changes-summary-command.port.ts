import { InjectionToken } from '@angular/core';
import { ChangeSummaryCommand } from "./change-summary.command";
import { Observable } from "rxjs";

export const CHANGES_SUMMARY_COMMAND_PORT = new InjectionToken<ChangesSummaryCommandPort>('CHANGES_SUMMARY_COMMAND_PORT');

export interface ChangesSummaryCommandPort {
  changeSummary(command:ChangeSummaryCommand):Observable<void>;
}
