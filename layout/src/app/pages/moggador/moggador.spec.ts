import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moggador } from './moggador';

describe('Moggador', () => {
  let component: Moggador;
  let fixture: ComponentFixture<Moggador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moggador],
    }).compileComponents();

    fixture = TestBed.createComponent(Moggador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
