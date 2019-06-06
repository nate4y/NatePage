import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyFeedComponent } from './spotify-feed.component';

describe('SpotifyFeedComponent', () => {
  let component: SpotifyFeedComponent;
  let fixture: ComponentFixture<SpotifyFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
