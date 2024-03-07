import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6q2Component } from './p6q2.component';

describe('P6q2Component', () => {
  let component: P6q2Component;
  let fixture: ComponentFixture<P6q2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P6q2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P6q2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
