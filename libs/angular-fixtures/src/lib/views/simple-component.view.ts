import { DebugElement, Predicate, Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { RouterLinkDirectiveStub } from '../stubs/router-link-directive.stub';

export class SimpleComponentView<T> {
  constructor(public fixture: ComponentFixture<T>) {}

  //// fixture helpers ////

  get componentInstance() {
    return this.fixture.componentInstance;
  }

  get nativeElement() {
    return this.fixture.nativeElement;
  }

  get debugElement() {
    return this.fixture.debugElement;
  }

  detectChanges(checkNoChanges?: boolean) {
    this.fixture.detectChanges(checkNoChanges);
    return this;
  }

  //// element lookups ////

  query(predicate: Predicate<DebugElement>): DebugElement {
    return this.debugElement.query(predicate);
  }

  queryAll(predicate: Predicate<DebugElement>): DebugElement[] {
    return this.debugElement.queryAll(predicate);
  }

  //// getters
  routerLinks(predicateFunction: (type: Type<any>) => Predicate<DebugElement>): DebugElement[] {
    return this.debugElement.queryAll(predicateFunction(RouterLinkDirectiveStub));
  }

  getMockedRouterLinkDirective(element: DebugElement): RouterLinkDirectiveStub {
    return element.injector.get(RouterLinkDirectiveStub);
  }
}
