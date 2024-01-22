import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ITradingItem} from "../../interfaces/trading-item.interface";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";

@Injectable()
export class TradingRequestService {
    private _httpClient: HttpClient = inject(HttpClient);

    public createTrading(data: ITradingItem): Observable<any> {
        return this._httpClient.post(environment.apiUrl + 'trading', data);
    }
}