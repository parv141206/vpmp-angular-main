import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P7q1Component } from './p7q1.component';

describe('P7q1Component', () => {
  let component: P7q1Component;
  let fixture: ComponentFixture<P7q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P7q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P7q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
