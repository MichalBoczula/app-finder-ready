import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { FindApiService } from '../service/find-api.service';
import { ServerModel } from '../state/ServerModel';

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

  constructor(private findApiService: FindApiService) { }

  ngOnInit(): void {
    this.initialServers = this.actualServers$;
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
