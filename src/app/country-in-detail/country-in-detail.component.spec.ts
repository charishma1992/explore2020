import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInDetailComponent } from './country-in-detail.component';

describe('CountryInDetailComponent', () => {
  let component: CountryInDetailComponent;
  let fixture: ComponentFixture<CountryInDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryInDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
