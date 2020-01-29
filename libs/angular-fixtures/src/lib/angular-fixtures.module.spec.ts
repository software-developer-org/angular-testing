import { async, TestBed } from '@angular/core/testing';
import { AngularFixturesModule } from './angular-fixtures.module';

describe('AngularFixturesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFixturesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularFixturesModule).toBeDefined();
  });
});
