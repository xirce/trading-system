import {HttpClient} from "@angular/common/http";
import {inject} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {IInventoryResponseModel} from "../response-models/inventory.response-model";
import {ISearchItemsResponseModel} from "../response-models/search-items.response-model";

export class InventoryRequestService {
    private _httpClient: HttpClient = inject(HttpClient);

    public getInventory(): Observable<IInventoryResponseModel> {
        return this._httpClient.get<IInventoryResponseModel>(environment.apiUrl + '/items/inventory');
    }
    
    public searchItem(query: string, page: number, perPage: number): Observable<ISearchItemsResponseModel> {
        return this._httpClient.get<ISearchItemsResponseModel>(environment.apiUrl + '/items/search', {
            params: {
                query,
                page,
                perPage
            }
        });
    }
}