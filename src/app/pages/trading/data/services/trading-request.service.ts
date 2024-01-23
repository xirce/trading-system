import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ITradingItem} from "../../interfaces/trading-item.interface";
import {map, Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {IGetTradingItemsResponseModel} from "../response-models/get-trading-items.response-model";
import {TradingItemModel} from "../models/trading-item.model";

@Injectable()
export class TradingRequestService {
    private _httpClient: HttpClient = inject(HttpClient);

    public createTrading(data: ITradingItem): Observable<void> {
        return this._httpClient.post<void>(environment.apiUrl + 'trading', data);
    }

    public getTradingItems(): Observable<TradingItemModel[]> {
        return this._httpClient.get<IGetTradingItemsResponseModel>(environment.apiUrl + 'trading')
            .pipe(
                map((res: IGetTradingItemsResponseModel) => res.tradingItems
                    .map((item: ITradingItem) => new TradingItemModel(item))
                )
            );
    }

    public deleteItem(hashName: string): Observable<void> {
        return this._httpClient.delete<void>(environment.apiUrl + `trading/${hashName}`);
    }
}