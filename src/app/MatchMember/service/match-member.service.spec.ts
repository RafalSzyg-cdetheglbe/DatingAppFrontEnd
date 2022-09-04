import { TestBed } from '@angular/core/testing';

import { MatchMemberService } from './match-member.service';

describe('MatchMemberService', () => {
  let service: MatchMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
