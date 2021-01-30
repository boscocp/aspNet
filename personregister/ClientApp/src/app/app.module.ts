import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonCRUDComponent } from './person-crud/person-crud.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { DeletPersonComponent } from './delet-person/delet-person.component';
import { GetIdPersonComponent } from './get-id-person/get-id-person.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PersonCRUDComponent,
    CreatePersonComponent,
    DeletPersonComponent,
    GetIdPersonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      // { path: 'counter', component: CounterComponent },
      // { path: 'fetch-data', component: FetchDataComponent },
      { path: 'person-crud', component: PersonCRUDComponent },
      { path: 'create-person', component: CreatePersonComponent },
      { path: 'delet-person', component: DeletPersonComponent },
      { path: 'get-id-person', component: GetIdPersonComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
