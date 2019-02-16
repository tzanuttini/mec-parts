import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPartesComponent } from './editar-partes.component';

describe('EditarPartesComponent', () => {
  let component: EditarPartesComponent;
  let fixture: ComponentFixture<EditarPartesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPartesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
