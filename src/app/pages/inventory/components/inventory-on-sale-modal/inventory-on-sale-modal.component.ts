import {Component, EventEmitter, Output} from "@angular/core";
import {InventoryModalBaseComponent} from "../../../../custom-modules/inventory/inventory-modal-base.component";
import {catchError, NEVER, take} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'inventory-on-sale-modal',
    templateUrl: './inventory-on-sale-modal.component.html',
    styleUrls: ['./styles/inventory-on-sale-modal.scss']
})
export class InventoryOnSaleModalComponent extends InventoryModalBaseComponent{
    @Output()
    public returnItemToInventory: EventEmitter<void> = new EventEmitter<void>();

    public removeItemFromSale(): void {
        this.saleItemRequestService.deleteSale(this.currentItem$.getValue().assetId)
            .pipe(
                take(1),
                catchError(() => {
                    this.errorToastVisible$.next(true);
                    this.closeModal.next();

                    return NEVER;
                }),
                takeUntilDestroyed(this.destroy$)
            )
            .subscribe(() => {
                this.successToastVisible$.next(true);
                this.closeModal.next();
            })

    }
}