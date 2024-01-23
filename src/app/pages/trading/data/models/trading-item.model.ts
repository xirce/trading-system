import {ITradingItem} from "../../interfaces/trading-item.interface";
import {IBuySettings} from "../../interfaces/buy-settings.interface";
import {ISaleSettings} from "../../interfaces/sale-settings.interface";

export class TradingItemModel implements ITradingItem {
    public hashName: string;
    public countToBuy: number;
    public autoSale: boolean;
    public buySettings: IBuySettings;
    public saleSettings?: ISaleSettings;
    public iconUrl?: string;

    constructor(data: ITradingItem) {
        this.hashName = data.hashName;
        this.countToBuy = data.countToBuy;
        this.autoSale = data.autoSale;
        this.buySettings = data.buySettings;
        this.saleSettings = data.saleSettings;
        this.iconUrl = data.iconUrl;
    }

}