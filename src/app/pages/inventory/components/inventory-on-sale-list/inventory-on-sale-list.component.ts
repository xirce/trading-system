import {ChangeDetectionStrategy, Component} from "@angular/core";
import {catchError, of, take} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {InventoryListAbstractComponent} from "../../../../custom-modules/inventory/inventory-list-abstract.component";
import {InventoryItemOnSaleModel} from "../../data/models/inventory-item-on-sale.model";

@Component({
    selector: 'inventory-on-sale-list',
    templateUrl: './inventory-on-sale-list.component.html',
    styleUrls: ['./styles/inventory-on-sale-list.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryOnSaleListComponent extends InventoryListAbstractComponent {
    public getNewInventory(): void {
        this.inventoryRequestService.getSaleItems()
            .pipe(
                take(1),
                catchError(() => {
                    this.errorToastVisible$.next(true);

                    return of([]);
                }),
                takeUntilDestroyed(this.destroy$)
            )
            .subscribe((items: InventoryItemOnSaleModel[]) => {
                this.listItems$.next(items);
            });
    }
}