import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstacionesComponent } from './lista-estaciones.component';

describe('ListaEstacionesComponent', () => {
  let component: ListaEstacionesComponent;
  let fixture: ComponentFixture<ListaEstacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEstacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
