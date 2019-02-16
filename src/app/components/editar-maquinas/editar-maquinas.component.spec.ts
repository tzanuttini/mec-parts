import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMaquinasComponent } from './editar-maquinas.component';

describe('EditarMaquinasComponent', () => {
  let component: EditarMaquinasComponent;
  let fixture: ComponentFixture<EditarMaquinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMaquinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
