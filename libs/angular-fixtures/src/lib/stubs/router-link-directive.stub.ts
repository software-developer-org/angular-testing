import {
  Directive,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

/**
 * Source: https://angular.io/guide/testing#components-with-routerlink
 */
@Directive({
  selector: '[routerLink]'
})
export class RouterLinkDirectiveStub implements OnChanges, OnDestroy {
  @Input('routerLink')
  routerLink: string;

  routerLinkClicked = false;

  constructor() {}

  @HostListener('click')
  onClick() {
    this.routerLinkClicked = true;
  }

  //// mock for RouterLinkWithHref
  ngOnChanges(changes: SimpleChanges): void {
    // no-op
  }

  ngOnDestroy(): void {
    // no-op
  }
}
