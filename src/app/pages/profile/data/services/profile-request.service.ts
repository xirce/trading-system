import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {IUserSettings} from "../interfaces/user-settings.interface";

@Injectable()
export class ProfileRequestService {
    private _httpClient: HttpClient = inject(HttpClient);

    public getUserSettings(): Observable<IUserSettings> {
        return this._httpClient.get<IUserSettings>(environment.apiUrl + 'settings/profile');

    }
    public saveUserSettings(data: IUserSettings): Observable<any> {
        return this._httpClient.post(environment.apiUrl + 'settings/profile', data);
    }
}