import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadHunterManageComponent } from './head-hunter-manage.component';

describe('HeadHunterManageComponent', () => {
  let component: HeadHunterManageComponent;
  let fixture: ComponentFixture<HeadHunterManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadHunterManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadHunterManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
