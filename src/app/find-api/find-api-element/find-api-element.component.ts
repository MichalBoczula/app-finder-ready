import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { DomainModel } from '../state/DomainModel';
import { getDomains, getError, getLoaded, getServers } from '../state/selectors/find-api.selectors';
import * as FindApiRequestActions from '../state/actions/find-api.request.actions'

@Component({
  selector: 'app-find-api-element',
  templateUrl: './find-api-element.component.html',
  styleUrls: ['./find-api-element.component.css']
})
export class FindApiElementComponent implements OnInit {

  private initialDomains!: Observable<DomainModel[]>;

  actualDomains$?:  Observable<DomainModel[]>;
  
  errorMessage$?: Observable<string>;

  findByName: string = '';

  loaded$?: Observable<boolean>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(FindApiRequestActions.loadDomainModels());
    this.actualDomains$ = this.store.select(getDomains);
    this.errorMessage$ = this.store.select(getError);
    this.loaded$ = this.store.select(getLoaded);
    this.initialDomains = this.actualDomains$;
  }

  filter(): void {
    if (this.findByName === '') {
      this.actualDomains$ = this.initialDomains
    }
    else {
      let localDomains: DomainModel[] = []
      this.actualDomains$?.subscribe(x => localDomains = x);

      this.actualDomains$ = of(localDomains.map(x => {
        let apis = x.apis.filter(y => y.toLocaleLowerCase().includes(this.findByName));

        let name = x.name;
        return { name, apis }
      }).filter(x => x.apis.length > 0));

      this.findByName = '';
    }
  }
}
