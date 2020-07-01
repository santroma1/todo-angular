import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowBoxComponent } from './arrow-box.component';

describe('ArrowBoxComponent', () => {
  let component: ArrowBoxComponent;
  let fixture: ComponentFixture<ArrowBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
