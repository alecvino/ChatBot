import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabefComponent } from './aufgabef.component';

describe('AufgabefComponent', () => {
  let component: AufgabefComponent;
  let fixture: ComponentFixture<AufgabefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AufgabefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
