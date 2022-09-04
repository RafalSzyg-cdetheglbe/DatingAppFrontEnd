import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchMemberComponent } from './match-member.component';

describe('MatchMemberComponent', () => {
  let component: MatchMemberComponent;
  let fixture: ComponentFixture<MatchMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
