import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazycontactComponent } from './lazycontact.component';

describe('LazycontactComponent', () => {
  let component: LazycontactComponent;
  let fixture: ComponentFixture<LazycontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazycontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazycontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
