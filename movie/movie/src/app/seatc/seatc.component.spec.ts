import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatcComponent } from './seatc.component';

describe('SeatcComponent', () => {
  let component: SeatcComponent;
  let fixture: ComponentFixture<SeatcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
