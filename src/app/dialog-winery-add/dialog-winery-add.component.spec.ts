import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogWineryAddComponent } from './dialog-winery-add.component';

describe('DialogWineryAddComponent', () => {
  let component: DialogWineryAddComponent;
  let fixture: ComponentFixture<DialogWineryAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWineryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWineryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
