import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcompComponent } from './wcomp.component';

describe('WcompComponent', () => {
  let component: WcompComponent;
  let fixture: ComponentFixture<WcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
