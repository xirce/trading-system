import {HttpClient} from "@angular/common/http";
import {inject} from "@angular/core";
import {map, Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {IInventoryResponseModel} from "../response-models/inventory.response-model";
import {ISearchItemsResponseModel} from "../response-models/search-items.response-model";
import {InventoryItemModel} from "../models/inventory-item.model";
import {IInventoryItemResponseModel} from "../response-models/inventory-item.response-model";

export class InventoryRequestService {
    private _httpClient: HttpClient = inject(HttpClient);

    /**
     * получить инвентарь
     * @return поток от массива моделей предметов
     * */
    public getInventory(): Observable<InventoryItemModel[]> {
        return this._httpClient.get<IInventoryResponseModel>(environment.apiUrl + '/items/inventory')
            .pipe(
                map((res: IInventoryResponseModel) => res.items.map((item: IInventoryItemResponseModel) => new InventoryItemModel(item)))
            );
    }

    /** найти предметы */
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