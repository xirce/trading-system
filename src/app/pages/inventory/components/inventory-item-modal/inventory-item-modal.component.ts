import {ChangeDetectionStrategy, Component, EventEmitter, Output} from "@angular/core";
import {catchError, NEVER, take} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {InventoryModalBaseComponent} from "../../../../custom-modules/inventory/inventory-modal-base.component";

@Component({
    selector: 'inventory-item-modal',
    templateUrl: './inventory-item-modal.component.html',
    styleUrls: ['./styles/inventory-item-modal-content.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryItemModalComponent extends InventoryModalBaseComponent {
    @Output()
    public itemUpForSale: EventEmitter<void> = new EventEmitter<void>();

    public form: FormGroup = new FormGroup<any>({
        minPrice: new FormControl(''),
        price: new FormControl(''),
        reduceByAmount: new FormControl('')
    });

    public saleItem(): void {
        this.saleItemRequestService.saleItem({
            saleSettings: {
                price: +this.form.value.price,
                minPrice: +this.form.value.minPrice,
                reduceByAmount: +this.form.value.reduceByAmount
            },
            assetId: this.currentItem$.getValue().assetId
        })
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
                this.closeModal.next();
                this.successToastVisible$.next(true);
            });
    }
}