import { Component, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Person } from '../person-crud/person-crud.component';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {

  name: string = '';
  cpf: string = '0';
  birthdate: string = '';
  income: string = '0';

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {

  }

  create(): void {
    const person: Person = {
      name: this.name,
      cpf: Number.parseInt(this.cpf),
      birthdate: this.birthdate,
      income: Number.parseFloat(this.income)
    };

    this.http.post<Person>(this.baseUrl + 'api/Person',person).subscribe(_ => {
    }, error => console.error(error));
  }
}

