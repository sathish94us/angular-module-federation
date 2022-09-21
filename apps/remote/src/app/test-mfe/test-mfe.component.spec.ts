import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMfeComponent } from './test-mfe.component';

describe('TestMfeComponent', () => {
  let component: TestMfeComponent;
  let fixture: ComponentFixture<TestMfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMfeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
