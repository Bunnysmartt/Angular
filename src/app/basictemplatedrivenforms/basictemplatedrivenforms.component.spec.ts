import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasictemplatedrivenformsComponent } from './basictemplatedrivenforms.component';

describe('BasictemplatedrivenformsComponent', () => {
  let component: BasictemplatedrivenformsComponent;
  let fixture: ComponentFixture<BasictemplatedrivenformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasictemplatedrivenformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasictemplatedrivenformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
