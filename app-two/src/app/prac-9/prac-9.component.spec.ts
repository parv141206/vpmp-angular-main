import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac9Component } from './prac-9.component';

describe('Prac9Component', () => {
  let component: Prac9Component;
  let fixture: ComponentFixture<Prac9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prac9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prac9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
