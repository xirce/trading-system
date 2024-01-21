export interface ISaleItemRequestModel {
    assetId: string;
    saleSettings: {
        price: number;
        minPrice: number;
    }
}