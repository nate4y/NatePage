import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicfeedComponent } from './picfeed.component';

describe('PicfeedComponent', () => {
  let component: PicfeedComponent;
  let fixture: ComponentFixture<PicfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
