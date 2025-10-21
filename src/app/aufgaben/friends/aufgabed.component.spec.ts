import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabedComponent } from './aufgabed.component';

describe('AufgabedComponent', () => {
  let component: AufgabedComponent;
  let fixture: ComponentFixture<AufgabedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AufgabedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
