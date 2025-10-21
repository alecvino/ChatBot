import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabegComponent } from './aufgabeg.component';

describe('AufgabegComponent', () => {
  let component: AufgabegComponent;
  let fixture: ComponentFixture<AufgabegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AufgabegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
