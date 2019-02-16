import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarOperarioComponent } from './borrar-operario.component';

describe('BorrarOperarioComponent', () => {
  let component: BorrarOperarioComponent;
  let fixture: ComponentFixture<BorrarOperarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarOperarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
