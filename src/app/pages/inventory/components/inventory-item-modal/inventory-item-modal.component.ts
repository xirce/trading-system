import {ChangeDetectionStrategy, Component, inject, Input} from "@angular/core";
import {InventoryItemModel} from "../../data/models/inventory-item.model";
import {BehaviorSubject} from "rxjs";
import {CURRENT_INVENTORY_ITEM} from "../../tokens/current-inventory-item.token";

@Component({
    selector: 'inventory-item-modal',
    templateUrl: './inventory-item-modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryItemModalComponent {
    public currentItem$: BehaviorSubject<InventoryItemModel> = inject(CURRENT_INVENTORY_ITEM);
}