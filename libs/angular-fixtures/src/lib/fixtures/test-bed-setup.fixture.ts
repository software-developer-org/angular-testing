import {
  Component,
  DebugElement,
  Directive,
  InjectFlags,
  InjectionToken,
  NgModule,
  Pipe,
  Predicate,
  Type,
} from "@angular/core";
import { ComponentFixture, MetadataOverride, TestBedStatic } from "@angular/core/testing";
import { ActivatedRoute, RouterLink, RouterLinkWithHref } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { RouterLinkDirectiveStub } from "../stubs/router-link-directive.stub";
import { View } from "../views/simple-component.view";
import { SetupFixtures } from "./setup.fixture";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export class TestBedSetup<
  DATA,
  VIEW extends View<COMPONENT, NATIVE_ELEMENT>,
  COMPONENT = any,
  NATIVE_ELEMENT = any
> extends SetupFixtures<DATA, VIEW> {
  constructor(public testBedStatic: TestBedStatic, public data?: DATA, public view?: VIEW) {
    super(data, view);
    this.testBedStatic
      .overrideModule(RouterTestingModule, {
        add: {
          imports: [RouterTestingModule],
        },
      })
      .overrideProvider(MatDialogRef, {
        useValue: {},
      })
      .overrideProvider(MAT_DIALOG_DATA, {
        useValue: {},
      })
      .overrideDirective(RouterLink, {
        set: {
          providers: [
            {
              provide: RouterLink,
              useClass: RouterLinkDirectiveStub,
            },
          ],
        },
      })
      .overrideDirective(RouterLinkWithHref, {
        set: {
          providers: [
            {
              provide: RouterLinkWithHref,
              useClass: RouterLinkDirectiveStub,
            },
          ],
        },
      });
  }

  stubRouteData(data: any) {
    this.testBedStatic.overrideProvider(ActivatedRoute, {
      useValue: {
        data: of(data),
      },
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

  //// TestBed delegators
  overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>) {
    this.testBedStatic.overrideModule(ngModule, override);
    return this;
  }

  overrideComponent(component: Type<any>, override: MetadataOverride<Component>) {
    this.testBedStatic.overrideComponent(component, override);
    return this;
  }

  overrideDirective(directive: Type<any>, override: MetadataOverride<Directive>) {
    this.testBedStatic.overrideDirective(directive, override);
    return this;
  }

  overridePipe(pipe: Type<any>, override: MetadataOverride<Pipe>) {
    this.testBedStatic.overridePipe(pipe, override);
    return this;
  }

  overrideTemplate(component: Type<any>, template: string) {
    this.testBedStatic.overrideTemplate(component, template);
    return this;
  }

  overrideTemplateUsingTestingModule(component: Type<any>, template: string) {
    this.testBedStatic.overrideTemplateUsingTestingModule(component, template);
    return this;
  }

  overrideProvider(
    token: any,
    provider: {
      useFactory?: Function;
      useValue?: any;
      deps?: any[];
    }
  ) {
    this.testBedStatic.overrideProvider(token, provider);
    return this;
  }

  get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags) {
    return this.testBedStatic.get(token, notFoundValue, flags);
  }

  createComponent<T>(component: Type<T>): ComponentFixture<T> {
    return this.testBedStatic.createComponent(component);
  }
}
