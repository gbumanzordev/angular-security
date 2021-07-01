import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventXssComponent } from './prevent-xss.component';

describe('PreventXssComponent', () => {
  let component: PreventXssComponent;
  let fixture: ComponentFixture<PreventXssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventXssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventXssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
