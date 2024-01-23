import {HttpClient} from "@angular/common/http";
import {inject} from "@angular/core";
import {map, Observable, of} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {IInventoryResponseModel} from "../response-models/inventory.response-model";
import {ISearchItemsResponseModel} from "../response-models/search-items.response-model";
import {InventoryItemModel} from "../models/inventory-item.model";
import {IInventoryItemResponseModel} from "../response-models/inventory-item.response-model";
import {IInventoryItemOnSaleResponseModel} from "../response-models/inventory-item-on-sale.response-model";
import {IInventoryOnSaleResponseModel} from "../response-models/inventory-on-sale.response-model";
import {InventoryItemOnSaleModel} from "../models/inventory-item-on-sale.model";

export class InventoryRequestService {
    private _httpClient: HttpClient = inject(HttpClient);

    /**
     * получить инвентарь
     * @return поток от массива моделей предметов
     * */
    public getInventory(): Observable<InventoryItemModel[]> {
        return this._httpClient.get<IInventoryResponseModel>(environment.apiUrl + 'items/inventory')
            .pipe(
                map((res: IInventoryResponseModel) => res.items.map((item: IInventoryItemResponseModel) => new InventoryItemModel(item)))
            );
    }


    public getSaleItems(): Observable<InventoryItemOnSaleModel[]> {
        return this._httpClient.get<IInventoryOnSaleResponseModel>(environment.apiUrl + 'sale/items')
            .pipe(
                map((res: IInventoryOnSaleResponseModel) => res.saleItems.map((item: IInventoryItemOnSaleResponseModel) => new InventoryItemOnSaleModel(item)))
            );
    }
}