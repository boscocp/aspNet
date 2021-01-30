import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-crud',
  templateUrl: './person-crud.component.html',
  styleUrls: ['./person-crud.component.css']
})
export class PersonCRUDComponent {
  public persons: Person[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Person[]>(baseUrl + 'api/Person').subscribe(result => {
      this.persons = result;
    }, error => console.error(error));
  }
}

interface Person {
  id: bigint;
  name: string;
  cpf: number;
  income: number;
  birthdate: string;
}
