import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac4Component } from './prac-4.component';

describe('Prac4Component', () => {
  let component: Prac4Component;
  let fixture: ComponentFixture<Prac4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prac4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prac4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
