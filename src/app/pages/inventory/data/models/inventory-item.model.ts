import {IInventoryItemResponseModel} from "../response-models/inventory-item.response-model";

export class InventoryItemModel implements IInventoryItemResponseModel {
    public name: string;
    public hashName: string;
    public price: number;
    public iconUrl: string;
    public color: string;
    public assetId: string;

    constructor(data: IInventoryItemResponseModel) {
        this.name = data.name;
        this.hashName = data.hashName;
        this.price = data.price;
        this.iconUrl = data.iconUrl;
        this.color = data.color;
        this.assetId = data.assetId;
    }
}