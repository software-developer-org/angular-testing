import { DebugElement, Predicate, Type } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { RouterLinkDirectiveStub } from "../stubs/router-link-directive.stub";

/**
 * A view interface representing a page object as suggested from Angular guide: https://angular.io/guide/testing#use-a-page-object
 */
export interface View<COMPONENT, NATIVE_ELEMENT = any> {
  fixture: ComponentFixture<COMPONENT>;

  //// fixture delegators ////
  componentInstance: COMPONENT;
  debugElement: DebugElement;
  nativeElement: NATIVE_ELEMENT;
  detectChanges(checkNoChanges?: boolean): SimpleComponentView<COMPONENT, NATIVE_ELEMENT>;

  //// fiture debug element delegators ////
  query(predicate: Predicate<DebugElement>): DebugElement;
  queryAll(predicate: Predicate<DebugElement>): DebugElement[];
}

export class SimpleComponentView<COMPONENT, NATIVE_ELEMENT = Element> implements View<COMPONENT, NATIVE_ELEMENT> {
  constructor(public fixture: ComponentFixture<COMPONENT>) {}

  get componentInstance(): COMPONENT {
    return this.fixture.componentInstance;
  }

  get debugElement(): DebugElement {
    return this.fixture.debugElement;
  }

  get nativeElement(): NATIVE_ELEMENT {
    return this.fixture.nativeElement;
  }

  detectChanges(checkNoChanges?: boolean): SimpleComponentView<COMPONENT, NATIVE_ELEMENT> {
    this.fixture.detectChanges(checkNoChanges);
    return this;
  }

  query(predicate: Predicate<DebugElement>): DebugElement {
    return this.debugElement.query(predicate);
  }

  queryAll(predicate: Predicate<DebugElement>): DebugElement[] {
    return this.debugElement.queryAll(predicate);
  }

  getRouterLinks(predicateFunction: (type: Type<any>) => Predicate<DebugElement>): DebugElement[] {
    return this.queryAll(predicateFunction(RouterLinkDirectiveStub));
  }

  getMockedRouterLinkDirective(element: DebugElement): RouterLinkDirectiveStub {
    return element.injector.get(RouterLinkDirectiveStub);
  }
}
