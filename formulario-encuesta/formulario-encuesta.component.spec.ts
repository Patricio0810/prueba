import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEncuestaComponent } from './formulario-encuesta.component';

describe('FormularioEncuestaComponent', () => {
  let component: FormularioEncuestaComponent;
  let fixture: ComponentFixture<FormularioEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEncuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
