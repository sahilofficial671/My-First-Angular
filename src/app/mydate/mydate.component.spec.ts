import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydateComponent } from './mydate.component';

describe('MydateComponent', () => {
  let component: MydateComponent;
  let fixture: ComponentFixture<MydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
