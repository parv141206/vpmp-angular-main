import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac10Component } from './prac-10.component';

describe('Prac10Component', () => {
  let component: Prac10Component;
  let fixture: ComponentFixture<Prac10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prac10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prac10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
