import {IInventoryItemResponseModel} from "./inventory-item.response-model";

export interface ISearchItemsResponseModel {
    items: IInventoryItemResponseModel[],
    pagination: {
        page: number;
        perPage: number;
        totalCount: number;
    }
}