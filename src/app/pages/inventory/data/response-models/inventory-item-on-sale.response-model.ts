import {ISaleSettingsResponseModel} from "./sale-settings.response-model";
import {IInventoryItemResponseModel} from "./inventory-item.response-model";

export interface IInventoryItemOnSaleResponseModel extends IInventoryItemResponseModel {
    saleSettings: ISaleSettingsResponseModel;
}