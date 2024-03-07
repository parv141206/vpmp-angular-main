import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac8Component } from './prac-8.component';

describe('Prac8Component', () => {
  let component: Prac8Component;
  let fixture: ComponentFixture<Prac8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prac8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prac8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
