import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac5Component } from './prac-5.component';

describe('Prac5Component', () => {
  let component: Prac5Component;
  let fixture: ComponentFixture<Prac5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prac5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prac5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
