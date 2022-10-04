import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeesdataComponent } from './addemployeesdata.component';

describe('AddemployeesdataComponent', () => {
  let component: AddemployeesdataComponent;
  let fixture: ComponentFixture<AddemployeesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployeesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
