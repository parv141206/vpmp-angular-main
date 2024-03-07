import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac7Component } from './prac-7.component';

describe('Prac7Component', () => {
  let component: Prac7Component;
  let fixture: ComponentFixture<Prac7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prac7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prac7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
