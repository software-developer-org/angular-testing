import { TestBedStatic } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkWithHref
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { RouterLinkDirectiveStub } from '../stubs/router-link-directive.stub';
import { SetupFixtures } from './setup.fixture';

export class UnitTestSetup<T> extends SetupFixtures<T> {
  constructor(public testBedStatic: TestBedStatic, public fixtures?: T) {
    super(fixtures);
    this.testBedStatic
      .overrideModule(RouterTestingModule, {
        add: {
          imports: [RouterTestingModule]
        }
      })
      .overrideProvider(MatDialogRef, {
        useValue: {}
      })
      .overrideProvider(MAT_DIALOG_DATA, {
        useValue: {}
      })
      .overrideDirective(RouterLink, {
        set: {
          providers: [
            {
              provide: RouterLink,
              useClass: RouterLinkDirectiveStub
            }
          ]
        }
      })
      .overrideDirective(RouterLinkWithHref, {
        set: {
          providers: [
            {
              provide: RouterLinkWithHref,
              useClass: RouterLinkDirectiveStub
            }
          ]
        }
      });
  }

  stubRouteData(data: any) {
    this.testBedStatic.overrideProvider(ActivatedRoute, {
      useValue: {
        data: of(data)
      }
    });
    return this;
  }
}