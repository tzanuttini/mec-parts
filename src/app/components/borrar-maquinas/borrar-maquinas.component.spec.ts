import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarMaquinasComponent } from './borrar-maquinas.component';

describe('BorrarMaquinasComponent', () => {
  let component: BorrarMaquinasComponent;
  let fixture: ComponentFixture<BorrarMaquinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarMaquinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
