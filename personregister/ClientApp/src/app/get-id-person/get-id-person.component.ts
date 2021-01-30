import { Component, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Person } from '../person-crud/person-crud.component';

@Component({
  selector: 'app-get-id-person',
  templateUrl: './get-id-person.component.html',
  styleUrls: ['./get-id-person.component.css']
})

export class GetIdPersonComponent {
  id = 0;
  name = 'teste';
  cpf = 0;
  birthDate = '';
  income: number = 0;

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
  }
  getId()
  {
    this.http.get<Person>(this.baseUrl + 'api/Person/'+this.id).subscribe(result => {
      this.name = result.name;
      this.cpf = result.cpf;
      this.birthDate = result.birthDate;
      this.income = result.income;
    }, error => console.error(error));
  }

  update()
  {
    const person: Person = {
      name: this.name,
      cpf: this.cpf,
      birthDate: this.birthDate,
      income: this.income
    };
    this.http.put<Person>(this.baseUrl + 'api/Person/'+this.id, person).subscribe(result => {
    }, error => console.error(error));
  }
}
