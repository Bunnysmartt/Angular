import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicpipesComponent } from './basicpipes.component';

describe('BasicpipesComponent', () => {
  let component: BasicpipesComponent;
  let fixture: ComponentFixture<BasicpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicpipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
