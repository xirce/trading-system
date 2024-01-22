import {IBuySettings} from "./buy-settings.interface";
import {ISaleSettings} from "./sale-settings.interface";

export interface ITradingItem {
    hashName: string;
    countToBuy: number;
    autoSale: boolean;
    buySettings: IBuySettings;
    saleSettings?: ISaleSettings;
}