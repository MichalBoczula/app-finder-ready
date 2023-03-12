import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { FindApiService } from '../service/find-api.service';
import { getError, getServers, getTest } from '../state/selectors/find-api.selectors';
import { ServerModel } from '../state/ServerModel';
import * as FindApiRequestActions from '../state/actions/find-api.request.actions'

@Component({
  selector: 'app-find-api-list',
  templateUrl: './find-api-list.component.html',
  styleUrls: ['./find-api-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindApiListComponent implements OnInit {

  private initialServers!: Observable<ServerModel[]>;

  actualServers$ = this.findApiService.servers$

  findByName: string = '';

  errorMessage$?: Observable<string>;

  constructor(private findApiService: FindApiService, private store: Store<any>) { }

  ngOnInit(): void {
    this.initialServers = this.actualServers$;
    this.store.dispatch(FindApiRequestActions.loadServerModels());
    this.actualServers$ = this.store.select(getServers);
    this.errorMessage$ = this.store.select(getError);
  }

  filter(): void {
    if (this.findByName === '') {
      this.actualServers$ = this.initialServers
    }
    else {
      let localServers: ServerModel[] = [];
      this.actualServers$.subscribe(x => localServers = x);
      this.actualServers$ = of(localServers.filter(x => x.name.toLowerCase().includes(this.findByName)));
      this.findByName = '';
    }
  }
}
