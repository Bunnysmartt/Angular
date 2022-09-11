import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicstructuraldirectivesComponent } from './basicstructuraldirectives.component';

describe('BasicstructuraldirectivesComponent', () => {
  let component: BasicstructuraldirectivesComponent;
  let fixture: ComponentFixture<BasicstructuraldirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicstructuraldirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicstructuraldirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
