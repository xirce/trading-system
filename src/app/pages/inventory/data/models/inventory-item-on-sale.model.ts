import {InventoryItemModel} from "./inventory-item.model";
import {IInventoryItemOnSaleResponseModel} from "../response-models/inventory-item-on-sale.response-model";
import {ISaleSettingsResponseModel} from "../response-models/sale-settings.response-model";

export class InventoryItemOnSaleModel extends InventoryItemModel implements IInventoryItemOnSaleResponseModel {
    public saleSettings: ISaleSettingsResponseModel;
    constructor(data: IInventoryItemOnSaleResponseModel) {
        super(data);
        this.saleSettings = data.saleSettings;
    }

}