import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResUserComponent } from './res-user.component';

describe('ResUserComponent', () => {
  let component: ResUserComponent;
  let fixture: ComponentFixture<ResUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
