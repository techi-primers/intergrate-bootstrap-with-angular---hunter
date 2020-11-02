import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeadhunterComponent } from './view-headhunter.component';

describe('ViewHeadhunterComponent', () => {
  let component: ViewHeadhunterComponent;
  let fixture: ComponentFixture<ViewHeadhunterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHeadhunterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHeadhunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
