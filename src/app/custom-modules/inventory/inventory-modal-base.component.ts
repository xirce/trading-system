import {DestroyRef, Directive, EventEmitter, inject, Output} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {InventoryItemModel} from "../../pages/inventory/data/models/inventory-item.model";
import {CURRENT_INVENTORY_ITEM} from "../../pages/inventory/tokens/current-inventory-item.token";
import {SUCCESS_TOKEN_VISIBILITY_TOKEN} from "../success-modal/tokens/success-modal-visibility.token";
import {ERROR_TOKEN_VISIBILITY_TOKEN} from "../error-modal/tokens/error-modal-visibility.token";
import {SaleItemRequestService} from "../sale-item/data/services/sale-item-request.service";

@Directive()
export abstract class InventoryModalBaseComponent {
    @Output()
    public closeModal: EventEmitter<void> = new EventEmitter<void>();

    public currentItem$: BehaviorSubject<InventoryItemModel> = inject(CURRENT_INVENTORY_ITEM);
    protected readonly successToastVisible$: BehaviorSubject<boolean> = inject(SUCCESS_TOKEN_VISIBILITY_TOKEN);
    protected readonly errorToastVisible$: BehaviorSubject<boolean> = inject(ERROR_TOKEN_VISIBILITY_TOKEN);
    protected readonly saleItemRequestService: SaleItemRequestService = inject(SaleItemRequestService);
    protected readonly destroy$: DestroyRef = inject(DestroyRef);
}