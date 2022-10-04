import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinputoutputdecoratorsComponent } from './basicinputoutputdecorators.component';

describe('BasicinputoutputdecoratorsComponent', () => {
  let component: BasicinputoutputdecoratorsComponent;
  let fixture: ComponentFixture<BasicinputoutputdecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicinputoutputdecoratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicinputoutputdecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
