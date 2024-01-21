import {InjectionToken} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {InventoryItemModel} from "../data/models/inventory-item.model";

export const CURRENT_INVENTORY_ITEM: InjectionToken<BehaviorSubject<InventoryItemModel>>
    = new InjectionToken<BehaviorSubject<InventoryItemModel>>('токен с последним нажатым предметом');