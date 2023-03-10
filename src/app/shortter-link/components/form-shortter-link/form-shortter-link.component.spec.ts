import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShortterLinkComponent } from './form-shortter-link.component';

describe('FormShortterLinkComponent', () => {
  let component: FormShortterLinkComponent;
  let fixture: ComponentFixture<FormShortterLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShortterLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormShortterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
