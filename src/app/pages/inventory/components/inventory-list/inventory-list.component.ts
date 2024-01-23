import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, ViewChild} from "@angular/core";
import {InventoryRequestService} from "../../data/services/inventory-request.service";
import {InventoryItemModel} from "../../data/models/inventory-item.model";
import {BehaviorSubject, Observable, take} from "rxjs";
import {CURRENT_INVENTORY_ITEM} from "../../tokens/current-inventory-item.token";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'inventory-list',
    templateUrl: './inventory-list.component.html',
    styleUrls: ['./styles/inventory-list.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryListComponent implements OnInit {
    public listItems$: Observable<InventoryItemModel[] | null>;
    public modalVisible$: Observable<boolean>;

    private _modalVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _listItems$: BehaviorSubject<InventoryItemModel[] | null> = new BehaviorSubject<InventoryItemModel[] | null>(null);
    private _currentItem$: BehaviorSubject<InventoryItemModel> = inject(CURRENT_INVENTORY_ITEM);
    private _destroy$: DestroyRef = inject(DestroyRef);
    private _inventoryRequestService: InventoryRequestService = inject(InventoryRequestService);

    constructor() {
        this.listItems$ = this._listItems$.asObservable();
        this.modalVisible$ = this._modalVisible$.asObservable();
    }

    public ngOnInit(): void {
        this.getNewInventory();
    }

    public getNewInventory(): void {
        this._inventoryRequestService.getInventory()
            .pipe(
                take(1),
                takeUntilDestroyed(this._destroy$)
            )
            .subscribe((items: InventoryItemModel[]) => {
                this._listItems$.next(items);
            });
    }

    public setCurrentItem(item: InventoryItemModel) {
        this._currentItem$.next(item);
        this._modalVisible$.next(true);
    }

    public closeModal(): void {
        this._modalVisible$.next(false);
    }
}