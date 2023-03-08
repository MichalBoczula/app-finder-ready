import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindApiElementComponent } from './find-api-element/find-api-element.component';
import { FindApiListComponent } from './find-api-list/find-api-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FindApiContainerComponent } from './find-api-container/find-api-container.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    RouterModule.forRoot(ROUTES),
  ],
  exports: [
    FindApiContainerComponent
  ]
})
export class FindApiModule { }
