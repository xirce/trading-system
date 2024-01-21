import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IAuthUserResponseModel} from "../data/models/response-models/auth-user.response-model";
import {USER_INFO_TOKEN} from "../tokens/user-info.token";

@Injectable({
    providedIn: 'root'
})
export class AuthRequestService {
    public get isAuthorized(): boolean {
        return this._isAuthorized$.getValue();
    }

    public isAuthorized$: Observable<boolean>;
    private _isAuthorized$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _httpClient: HttpClient = inject(HttpClient);
    private _userInfo$: BehaviorSubject<IAuthUserResponseModel> = inject(USER_INFO_TOKEN);

    constructor() {
        this.isAuthorized$ = this._isAuthorized$.asObservable();
    }

    /** Авторизация по ключу */
    public authorize(): Observable<boolean> {
        return this._httpClient.get<IAuthUserResponseModel>(environment.apiUrl + 'auth/user')
            .pipe(
                tap((res: IAuthUserResponseModel) => {
                    const isAuthorized = !!res.id;
                    if (isAuthorized) {
                        this._isAuthorized$.next(true);
                        this._userInfo$.next(res);
                    }
                }),
                map(() => this._isAuthorized$.getValue())
            );
    }
}