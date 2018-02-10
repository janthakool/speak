import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoetComponent } from './categoet.component';

describe('CategoetComponent', () => {
  let component: CategoetComponent;
  let fixture: ComponentFixture<CategoetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
