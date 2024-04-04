import { Directive, OnDestroy } from "@angular/core";
import { SubSink } from "subsink";

@Directive()
export abstract class BaseWrapperDirective implements OnDestroy {
  
  subs = new SubSink();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}