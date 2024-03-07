import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P9q2Component } from './p9q2.component';

describe('P9q2Component', () => {
  let component: P9q2Component;
  let fixture: ComponentFixture<P9q2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P9q2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P9q2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
