import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCRUDComponent } from './person-crud.component';

describe('PersonCRUDComponent', () => {
  let component: PersonCRUDComponent;
  let fixture: ComponentFixture<PersonCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
