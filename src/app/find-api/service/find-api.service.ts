import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, tap, throwError } from 'rxjs';
import { ServerModel } from '../state/ServerModel';

@Injectable({
  providedIn: 'root'
})
export class FindApiService {

  private url = "api/servers";

  constructor(private httpClient: HttpClient) { }

  servers$ = this.httpClient.get<any>(this.url)
    .pipe(
      tap(x => console.log(JSON.stringify(x))),
      catchError(x => throwError(x)),
      shareReplay(1)
    )

  getProducts(): Observable<ServerModel[]> {
    return this.httpClient.get<any>(this.url)
      .pipe(
        tap(x => console.log(JSON.stringify(x))),
        catchError(x => throwError(x)),
        shareReplay(1)
      )
  }
}