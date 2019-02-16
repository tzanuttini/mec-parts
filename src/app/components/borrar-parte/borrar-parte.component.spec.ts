import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarParteComponent } from './borrar-parte.component';

describe('BorrarParteComponent', () => {
  let component: BorrarParteComponent;
  let fixture: ComponentFixture<BorrarParteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarParteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
