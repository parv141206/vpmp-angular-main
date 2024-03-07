import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P8q2Component } from './p8q2.component';

describe('P8q2Component', () => {
  let component: P8q2Component;
  let fixture: ComponentFixture<P8q2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P8q2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P8q2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
