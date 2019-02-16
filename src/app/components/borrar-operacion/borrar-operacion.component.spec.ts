import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarOperacionComponent } from './borrar-operacion.component';

describe('BorrarOperacionComponent', () => {
  let component: BorrarOperacionComponent;
  let fixture: ComponentFixture<BorrarOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
