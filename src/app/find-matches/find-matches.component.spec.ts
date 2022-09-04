import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMatchesComponent } from './find-matches.component';

describe('FindMatchesComponent', () => {
  let component: FindMatchesComponent;
  let fixture: ComponentFixture<FindMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
