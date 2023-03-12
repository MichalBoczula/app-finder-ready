import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { FindApiInMemoryDatabase } from './find-api-in-memory-database';

import { FindApiModule } from './find-api/find-api.module';
import { StoreModule } from '@ngrx/store';
import { FindApiReducer } from './find-api/state/find-api.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FindApiModule,
    HttpClientInMemoryWebApiModule.forRoot(FindApiInMemoryDatabase, { delay: 1000 }),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: isDevMode() }),
    StoreModule.forFeature('FindApiReducer', FindApiReducer),
    EffectsModule.forRoot({}),
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
