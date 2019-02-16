import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOperarioComponent } from './editar-operario.component';

describe('EditarOperarioComponent', () => {
  let component: EditarOperarioComponent;
  let fixture: ComponentFixture<EditarOperarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOperarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
