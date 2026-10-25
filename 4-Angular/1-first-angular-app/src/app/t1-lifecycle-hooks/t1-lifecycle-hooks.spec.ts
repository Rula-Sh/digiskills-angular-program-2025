import { ComponentFixture, TestBed } from '@angular/core/testing';
import { T1LifecycleHooks } from './t1-lifecycle-hooks';

describe('T1LifecycleHooks', () => {
  let component: T1LifecycleHooks;
  let fixture: ComponentFixture<T1LifecycleHooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T1LifecycleHooks],
    }).compileComponents();

    fixture = TestBed.createComponent(T1LifecycleHooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
