import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindApiElementComponent } from './find-api-element/find-api-element.component';
import { FindApiListComponent } from './find-api-list/find-api-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FindApiContainerComponent } from './find-api-container/find-api-container.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FindApiReducer } from './state/find-api.reducer';
import { FindApiEffects } from './state/effects/find-api.effects';

const ROUTES: any = [
  { path: "list/:name", component: FindApiListComponent },
  { path: "domains", component: FindApiElementComponent },
  { path: '', redirectTo: 'domains', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    FindApiElementComponent,
    FindApiListComponent,
    FindApiContainerComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('FindApiReducer', FindApiReducer),
    EffectsModule.forFeature([FindApiEffects]),
  ],
  exports: [
    FindApiContainerComponent
  ]
})
export class FindApiModule { }
