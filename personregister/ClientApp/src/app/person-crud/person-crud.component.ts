import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-crud',
  templateUrl: './person-crud.component.html',
  styleUrls: ['./person-crud.component.css']
})
export class PersonCRUDComponent  {
  public persons: Person[];

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
    this.GetPersons(http, baseUrl);
  }
  private GetPersons(http: HttpClient, baseUrl: string) {
    http.get<Person[]>(baseUrl + 'api/Person').subscribe(result => {
      this.persons = result;
    }, error => console.error(error));
  }

  delete(id: number) {
    this.http.delete<Person>(this.baseUrl + 'api/Person/'+id).subscribe(result => {
      this.GetPersons(this.http,this.baseUrl);
    }, error => console.error(error));
  }
}

export interface Person {
  id?: bigint;
  name: string;
  cpf: number;
  income: number;
  birthDate: string;
}
