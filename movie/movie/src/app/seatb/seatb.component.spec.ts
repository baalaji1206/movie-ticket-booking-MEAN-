import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatbComponent } from './seatb.component';

describe('SeatbComponent', () => {
  let component: SeatbComponent;
  let fixture: ComponentFixture<SeatbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
