import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDatePickerComponent } from './material-date-picker.component';

describe('MaterialDatePickerComponent', () => {
  let component: MaterialDatePickerComponent;
  let fixture: ComponentFixture<MaterialDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
