import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {
  public person: Person;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // http.post<Person>(baseUrl + 'api/Person').subscribe(result => {
    //   this.person = result;
    // }, error => console.error(error));  
  }

}
  
interface Person {
  id: bigint;
  name: string;
  cpf: number;
  income: number;
  birthdate: string;
}
