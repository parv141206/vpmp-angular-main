import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac14Component } from './prac-14.component';

describe('Prac14Component', () => {
  let component: Prac14Component;
  let fixture: ComponentFixture<Prac14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prac14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prac14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
