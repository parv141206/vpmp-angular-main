import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6q1Component } from './p6q1.component';

describe('P6q1Component', () => {
  let component: P6q1Component;
  let fixture: ComponentFixture<P6q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P6q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P6q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
