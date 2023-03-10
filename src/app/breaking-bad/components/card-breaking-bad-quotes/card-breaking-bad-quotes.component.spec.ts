import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBreakingBadQuotesComponent } from './card-breaking-bad-quotes.component';

describe('CardBreakingBadQuotesComponent', () => {
  let component: CardBreakingBadQuotesComponent;
  let fixture: ComponentFixture<CardBreakingBadQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBreakingBadQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBreakingBadQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
