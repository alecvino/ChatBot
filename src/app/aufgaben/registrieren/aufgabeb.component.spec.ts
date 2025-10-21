import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabebComponent } from './aufgabeb.component';

describe('AufgabebComponent', () => {
  let component: AufgabebComponent;
  let fixture: ComponentFixture<AufgabebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AufgabebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
