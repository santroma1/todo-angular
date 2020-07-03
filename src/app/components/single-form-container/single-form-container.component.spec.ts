import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFormContainerComponent } from './single-form-container.component';

describe('SingleFormContainerComponent', () => {
  let component: SingleFormContainerComponent;
  let fixture: ComponentFixture<SingleFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
