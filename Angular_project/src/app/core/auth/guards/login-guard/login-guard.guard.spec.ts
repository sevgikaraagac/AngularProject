import { LoginGuard } from './login.guard';
import { TestBed } from '@angular/core/testing';

describe('LoginGuardGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});