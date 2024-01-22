import {ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Output} from "@angular/core";
import {InventoryItemModel} from "../../data/models/inventory-item.model";
import {BehaviorSubject, catchError, NEVER, take} from "rxjs";
import {CURRENT_INVENTORY_ITEM} from "../../tokens/current-inventory-item.token";
import {FormControl, FormGroup} from "@angular/forms";
import {SaleItemRequestService} from "../../../../custom-modules/sale-item/data/services/sale-item-request.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {
    SUCCESS_TOKEN_VISIBILITY_TOKEN
} from "../../../../custom-modules/success-modal/tokens/success-modal-visibility.token";
import {ERROR_TOKEN_VISIBILITY_TOKEN} from "../../../../custom-modules/error-modal/tokens/error-modal-visibility.token";

@Component({
    selector: 'inventory-item-modal',
    templateUrl: './inventory-item-modal.component.html',
    styleUrls: ['./styles/inventory-item-modal-content.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryItemModalComponent {
    @Output()
    public closeModal: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public itemUpForSale: EventEmitter<void> = new EventEmitter<void>();

    public currentItem$: BehaviorSubject<InventoryItemModel> = inject(CURRENT_INVENTORY_ITEM);
    public form: FormGroup = new FormGroup<any>({
        minPrice: new FormControl(''),
        price: new FormControl(''),
        reduceByAmount: new FormControl('')
    });

    private readonly _successToastVisible$: BehaviorSubject<boolean> = inject(SUCCESS_TOKEN_VISIBILITY_TOKEN);
    private readonly _errorToastVisible$: BehaviorSubject<boolean> = inject(ERROR_TOKEN_VISIBILITY_TOKEN);
    private readonly _saleItemRequestService: SaleItemRequestService = inject(SaleItemRequestService);
    private readonly _destroy$: DestroyRef = inject(DestroyRef);

    public saleItem(): void {
        this._saleItemRequestService.saleItem({
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
                    this._errorToastVisible$.next(true);
                    this.closeModal.next();

                    return NEVER;
                }),
                takeUntilDestroyed(this._destroy$)
            )
            .subscribe(() => {
                this.closeModal.next();
                this._successToastVisible$.next(true);
            });
    }
}