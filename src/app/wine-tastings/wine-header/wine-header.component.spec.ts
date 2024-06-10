import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WineHeaderComponent } from './wine-header.component';

describe('WineHeaderComponent', () => {
  let component: WineHeaderComponent;
  let fixture: ComponentFixture<WineHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WineHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
