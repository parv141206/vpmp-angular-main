import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P8q1Component } from './p8q1.component';

describe('P8q1Component', () => {
  let component: P8q1Component;
  let fixture: ComponentFixture<P8q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P8q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P8q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
