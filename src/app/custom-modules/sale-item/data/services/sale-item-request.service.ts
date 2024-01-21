import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISaleItemRequestModel} from "../request-models/sale-item.request-model";
import {environment} from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SaleItemRequestService {
    private _httpClient: HttpClient = inject(HttpClient);

    public saleItem(data: ISaleItemRequestModel): Observable<void> {
        return this._httpClient.post<void>(environment.apiUrl + 'sale', data);
    }
}