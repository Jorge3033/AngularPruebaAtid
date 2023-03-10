import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortterLinkPageComponent } from './shortter-link-page.component';

describe('ShortterLinkPageComponent', () => {
  let component: ShortterLinkPageComponent;
  let fixture: ComponentFixture<ShortterLinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortterLinkPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortterLinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
