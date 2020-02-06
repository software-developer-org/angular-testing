import { DebugElement, Predicate } from '@angular/core';
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
import { View } from '../views/simple-component.view';
import { SetupFixtures } from './setup.fixture';

export class TestBedSetup<
  DATA,
  VIEW extends View<COMPONENT, NATIVE_ELEMENT>,
  COMPONENT = any,
  NATIVE_ELEMENT = any
> extends SetupFixtures<DATA, VIEW> {
  constructor(
    public testBedStatic: TestBedStatic,
    public data?: DATA,
    public view?: VIEW
  ) {
    super(data, view);
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

  //// view fixture delegators
  get component() {
    return this.view.componentInstance;
  }

  get debugElement(): DebugElement {
    return this.view.debugElement;
  }

  get nativeElement(): any {
    return this.view.nativeElement;
  }

  detectChanges() {
    this.view.detectChanges();
    return this;
  }

  query(predicate: Predicate<DebugElement>): DebugElement {
    return this.view.query(predicate);
  }

  queryAll(predicate: Predicate<DebugElement>): DebugElement[] {
    return this.view.queryAll(predicate);
  }

  ////
}
