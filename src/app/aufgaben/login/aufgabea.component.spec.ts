import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeaComponent } from './aufgabea.component';

describe('AufgabeaComponent', () => {
  let component: AufgabeaComponent;
  let fixture: ComponentFixture<AufgabeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AufgabeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
