import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermatologiaComponent } from './dermatologia.component';

describe('DermatologiaComponent', () => {
  let component: DermatologiaComponent;
  let fixture: ComponentFixture<DermatologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermatologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DermatologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
