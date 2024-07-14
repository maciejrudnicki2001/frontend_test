import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTextComponent } from './long-text.component';

describe('LongTextComponent', () => {
  let component: LongTextComponent;
  let fixture: ComponentFixture<LongTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LongTextComponent]
    });
    fixture = TestBed.createComponent(LongTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
