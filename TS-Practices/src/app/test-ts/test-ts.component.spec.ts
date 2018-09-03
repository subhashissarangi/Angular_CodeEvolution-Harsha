import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTSComponent } from './test-ts.component';

describe('TestTSComponent', () => {
  let component: TestTSComponent;
  let fixture: ComponentFixture<TestTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
