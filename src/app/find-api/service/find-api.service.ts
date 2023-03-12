import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, tap, throwError } from 'rxjs';
import { DomainModel } from '../state/DomainModel';
import { ServerModel } from '../state/ServerModel';

@Injectable({
  providedIn: 'root'
})
export class FindApiService {

  private servers = "api/servers";

  private domains = "api/domains";

  constructor(private httpClient: HttpClient) { }

  servers$ = this.httpClient.get<ServerModel[]>(this.servers)
    .pipe(
      tap(x => console.log(JSON.stringify(x))),
      catchError(this.handleError),
      shareReplay(1)
    )

  domains$ = this.httpClient.get<DomainModel[]>(this.domains)
    .pipe(
      tap(x => console.log(JSON.stringify(x))),
      catchError(this.handleError),
      shareReplay(1)
    )

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.statusText}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.statusText}`;
    }
    return throwError(() => errorMessage);
  }
}