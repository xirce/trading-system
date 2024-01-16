import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, EMPTY, map, Observable, switchMap, tap} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IAuthUserResponseModel} from "../data/models/response-models/auth-user.response-model";

@Injectable({
    providedIn: 'root'
})
export class AuthRequestService {
    public get isAuthorized(): boolean {
        return this._isAuthorized;
    }
    private _isAuthorized: boolean = false;

    constructor(
        private _httpClient: HttpClient
    ) {
    }

    public getAuthStatus(): Observable<boolean> {
        return this._httpClient.get<HttpResponse<IAuthUserResponseModel>>(environment.apiUrl + 'auth/user', {
            withCredentials: true
        })
            .pipe(
                tap((res) => {
                    this._isAuthorized = res.status >= 200 && res.status < 300;
                }),
                map(() => this._isAuthorized)
            );
    }
    
    public authorize(): void {
        //return this._httpClient.get<HttpResponse<void>>(environment.apiUrl + 'auth');
        window.location.href = 'http://localhost:5262/auth?redirectUri=http://localhost:8100/profile';
    }
}