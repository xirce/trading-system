import {inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {MARKET_KEY_TOKEN} from "../tokens/market-key.token";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private _marketKey: BehaviorSubject<string> = inject(MARKET_KEY_TOKEN);

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set(
                'X-Market-ApiKey',
                this._marketKey.getValue()
            ),
        });

        return next.handle(authReq);
    }
}