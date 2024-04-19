import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizadoresTabComponent } from './utilizadores-tab.component';

describe('UtilizadoresTabComponent', () => {
  let component: UtilizadoresTabComponent;
  let fixture: ComponentFixture<UtilizadoresTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilizadoresTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilizadoresTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
