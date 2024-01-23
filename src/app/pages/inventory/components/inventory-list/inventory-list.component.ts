import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, ViewChild} from "@angular/core";
import {InventoryRequestService} from "../../data/services/inventory-request.service";
import {InventoryItemModel} from "../../data/models/inventory-item.model";
import {BehaviorSubject, catchError, NEVER, Observable, of, take} from "rxjs";
import {CURRENT_INVENTORY_ITEM} from "../../tokens/current-inventory-item.token";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {InventoryListAbstractComponent} from "../../../../custom-modules/inventory/inventory-list-abstract.component";

@Component({
    selector: 'inventory-list',
    templateUrl: './inventory-list.component.html',
    styleUrls: ['./styles/inventory-list.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryListComponent extends InventoryListAbstractComponent {
    public getNewInventory(): void {
        this.inventoryRequestService.getInventory()
            .pipe(
                take(1),
                catchError(() => {
                    this.errorToastVisible$.next(true);

                    return of([]);
                }),
                takeUntilDestroyed(this.destroy$)
            )
            .subscribe((items: InventoryItemModel[]) => {
                this.listItems$.next(items);
            });
    }
}