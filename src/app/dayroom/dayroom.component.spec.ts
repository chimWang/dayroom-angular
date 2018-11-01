import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayroomComponent } from './dayroom.component';

describe('DayroomComponent', () => {
  let component: DayroomComponent;
  let fixture: ComponentFixture<DayroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
