import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseEventComponent } from './mouse-event.component';

describe('AddTutorialComponent', () => {
  let component: MouseEventComponent;
  let fixture: ComponentFixture<MouseEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseEventComponent]
    });
    fixture = TestBed.createComponent(MouseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
