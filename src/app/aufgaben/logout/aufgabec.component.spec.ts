import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabecComponent } from './aufgabec.component';

describe('AufgabecComponent', () => {
  let component: AufgabecComponent;
  let fixture: ComponentFixture<AufgabecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AufgabecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
