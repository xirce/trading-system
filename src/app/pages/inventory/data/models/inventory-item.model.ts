import {IInventoryItemResponseModel} from "../response-models/inventory-item.response-model";

export class InventoryItemModel implements IInventoryItemResponseModel {
    public name: string;
    public hashName: string;
    public marketPrice: number;
    public iconUrl: string;
    public color: string;
    public assetId: string;
    public currency: string;

    constructor(data: IInventoryItemResponseModel) {
        this.name = data.name;
        this.hashName = data.hashName;
        this.marketPrice = data.marketPrice;
        this.iconUrl = data.iconUrl;
        this.color = data.color;
        this.assetId = data.assetId;
        this.currency = data.currency;
    }
}