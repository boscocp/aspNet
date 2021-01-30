import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdPersonComponent } from './get-id-person.component';

describe('GetIdPersonComponent', () => {
  let component: GetIdPersonComponent;
  let fixture: ComponentFixture<GetIdPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
