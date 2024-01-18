import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from "@angular/core";
import {InventoryRequestService} from "../../data/services/inventory-request.service";
import {InventoryItemModel} from "../../data/models/inventory-item.model";
import {Observable} from "rxjs";

@Component({
    selector: 'inventory-list',
    templateUrl: './inventory-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryListComponent implements OnInit {
    public listItems$: Observable<InventoryItemModel[]>;
    private _inventoryRequestService: InventoryRequestService = inject(InventoryRequestService);
    private _destroy$: DestroyRef = inject(DestroyRef);

    public ngOnInit(): void {
        this.listItems$ = this._inventoryRequestService.getInventory();
    }
}