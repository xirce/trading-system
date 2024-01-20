import {BehaviorSubject} from "rxjs";
import {InjectionToken} from "@angular/core";

export const MARKET_KEY_TOKEN: InjectionToken<BehaviorSubject<string>> = new InjectionToken<BehaviorSubject<string>>('токен с market key');