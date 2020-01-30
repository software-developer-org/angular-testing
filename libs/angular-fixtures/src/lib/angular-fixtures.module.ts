import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveStub } from './stubs/router-link-directive.stub';

@NgModule({
  imports: [CommonModule],
  declarations: [RouterLinkDirectiveStub],
  exports: [RouterLinkDirectiveStub]
})
export class AngularFixturesModule {}
