import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, ViewChild} from "@angular/core";
import {InventoryRequestService} from "../../data/services/inventory-request.service";
import {InventoryItemModel} from "../../data/models/inventory-item.model";
import {Observable} from "rxjs";

@Component({
    selector: 'inventory-list',
    templateUrl: './inventory-list.component.html',
    styleUrls: ['./styles/inventory-list.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryListComponent implements OnInit {
    public isModalOpen: boolean;
    public listItems$: Observable<InventoryItemModel[]>;
    private _inventoryRequestService: InventoryRequestService = inject(InventoryRequestService);
    private _destroy$: DestroyRef = inject(DestroyRef);

    public ngOnInit(): void {
        this.listItems$ = this._inventoryRequestService.getInventory();
    }

    public setOpen(isOpen: boolean) {
        this.isModalOpen = isOpen;
    }
}