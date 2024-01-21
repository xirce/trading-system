import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, ViewChild} from "@angular/core";
import {InventoryRequestService} from "../../data/services/inventory-request.service";
import {InventoryItemModel} from "../../data/models/inventory-item.model";
import {BehaviorSubject, Observable} from "rxjs";
import {CURRENT_INVENTORY_ITEM} from "../../tokens/current-inventory-item.token";

@Component({
    selector: 'inventory-list',
    templateUrl: './inventory-list.component.html',
    styleUrls: ['./styles/inventory-list.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryListComponent implements OnInit {
    public get isModalOpen(): boolean {
        return this._isModalOpen;
    };
    public listItems$: Observable<InventoryItemModel[]>;
    private _inventoryRequestService: InventoryRequestService = inject(InventoryRequestService);
    private _currentItem$: BehaviorSubject<InventoryItemModel> = inject(CURRENT_INVENTORY_ITEM);
    private _isModalOpen: boolean = false;

    public ngOnInit(): void {
        this.listItems$ = this._inventoryRequestService.getInventory();
    }

    public setCurrentItem(item: InventoryItemModel) {
        this._currentItem$.next(item);
        this._isModalOpen = true;
    }

    public closeModal(): void {
        this._isModalOpen = false;
    }
}