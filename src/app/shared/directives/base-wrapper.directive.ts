import { Directive, OnDestroy } from "@angular/core";
import { SubSink } from "subsink";
import { LoaderService } from "../services/loader.service";

@Directive()
export abstract class BaseWrapperDirective implements OnDestroy {
  
  subs = new SubSink();

  constructor(public loader: LoaderService) { }

  loaderOn(): void {
    this.loader.on();
  }

  loaderOff(): void {
    this.loader.off();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}