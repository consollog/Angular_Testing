import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiForGuardComponent } from './logi-for-guard.component';

describe('LogiForGuardComponent', () => {
  let component: LogiForGuardComponent;
  let fixture: ComponentFixture<LogiForGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogiForGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogiForGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
