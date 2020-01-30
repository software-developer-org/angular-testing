import { DebugElement, Predicate } from '@angular/core';
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

  queryByCss(predicate: Predicate<DebugElement>): DebugElement {
    return this.debugElement.query(predicate);
  }

  queryAllByCss(predicate: Predicate<DebugElement>): DebugElement[] {
    return this.debugElement.queryAll(predicate);
  }

  //// getters
  getMockedRouterLinkDirective(element: DebugElement): RouterLinkDirectiveStub {
    return element.injector.get(RouterLinkDirectiveStub);
  }
}
