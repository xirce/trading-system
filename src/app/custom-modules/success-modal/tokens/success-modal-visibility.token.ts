import {InjectionToken} from "@angular/core";
import {BehaviorSubject} from "rxjs";

export const SUCCESS_TOKEN_VISIBILITY_TOKEN: InjectionToken<BehaviorSubject<boolean>>
    = new InjectionToken<BehaviorSubject<boolean>>('токен видимости модалки успешной операции');
