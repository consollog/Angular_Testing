import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForGuardComponent } from './home-for-guard.component';

describe('HomeForGuardComponent', () => {
  let component: HomeForGuardComponent;
  let fixture: ComponentFixture<HomeForGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeForGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeForGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
