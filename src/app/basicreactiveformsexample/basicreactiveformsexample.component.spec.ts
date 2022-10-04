import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicreactiveformsexampleComponent } from './basicreactiveformsexample.component';

describe('BasicreactiveformsexampleComponent', () => {
  let component: BasicreactiveformsexampleComponent;
  let fixture: ComponentFixture<BasicreactiveformsexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicreactiveformsexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicreactiveformsexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
