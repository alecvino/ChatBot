import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeeComponent } from './aufgabee.component';

describe('AufgabeeComponent', () => {
  let component: AufgabeeComponent;
  let fixture: ComponentFixture<AufgabeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AufgabeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
