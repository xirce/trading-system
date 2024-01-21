import {ISaleSettingsRequestModel} from "./sale-settings.request-model";

export interface ISaleItemRequestModel {
    assetId: string;
    saleSettings: ISaleSettingsRequestModel;
}