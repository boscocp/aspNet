import { Component, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Person } from '../person-crud/person-crud.component';

@Component({
  selector: 'app-delet-person',
  templateUrl: './delet-person.component.html',
  styleUrls: ['./delet-person.component.css']
})
export class DeletPersonComponent {
  id = 0;
  name = 'teste';
  cpf = 0;
  birthdate = '';
  income: number = 0;

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { }

  getId() {
    this.http.get<Person>(this.baseUrl + 'api/Person/'+this.id).subscribe(result => {
      this.name = result.name;
      this.cpf = result.cpf;
      this.birthdate = result.birthDate;
      this.income = result.income;
    }, error => console.error(error));
  }
  delete() {
    this.http.delete<Person>(this.baseUrl + 'api/Person/'+this.id).subscribe(result => {
    }, error => console.error(error));
  }
}
