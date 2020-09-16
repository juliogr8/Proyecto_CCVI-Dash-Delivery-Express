import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOrdenesComponent } from './listado-ordenes.component';

describe('ListadoOrdenesComponent', () => {
  let component: ListadoOrdenesComponent;
  let fixture: ComponentFixture<ListadoOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
