import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { FindApiService } from "../../service/find-api.service";
import * as FindApiRequestActions from '../actions/find-api.request.actions'

@Injectable()
export class FindApiEffects {

    constructor(private actions$: Actions,
        private findApiService: FindApiService) { }

    loadDomains$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(FindApiRequestActions.loadDomainModels),
            mergeMap(() => this.findApiService.domains$.pipe(
                map(domains => FindApiRequestActions.loadDomainModelsSuccess({ domains })),
                catchError(err => of(FindApiRequestActions.loadDomainModelsFailure({ error: err })))
            ))
        )
    });

    loadServers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(FindApiRequestActions.loadServerModels),
            mergeMap(() => this.findApiService.servers$.pipe(
                map(servers => FindApiRequestActions.loadServerModelsSuccess({ servers })),
                catchError(err => of(FindApiRequestActions.loadServerModelsFailure({ error: err })))
            ))
        )
    });
}