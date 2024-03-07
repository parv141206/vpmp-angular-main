import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac6Component } from './prac-6.component';

describe('Prac6Component', () => {
  let component: Prac6Component;
  let fixture: ComponentFixture<Prac6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prac6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prac6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
