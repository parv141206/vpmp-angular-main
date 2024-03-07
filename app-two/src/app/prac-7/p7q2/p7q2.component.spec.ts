import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P7q2Component } from './p7q2.component';

describe('P7q2Component', () => {
  let component: P7q2Component;
  let fixture: ComponentFixture<P7q2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P7q2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P7q2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
