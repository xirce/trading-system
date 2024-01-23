import {DestroyRef, Directive, inject, OnInit} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {InventoryItemModel} from "../../pages/inventory/data/models/inventory-item.model";
import {CURRENT_INVENTORY_ITEM} from "../../pages/inventory/tokens/current-inventory-item.token";
import {InventoryRequestService} from "../../pages/inventory/data/services/inventory-request.service";
import {SUCCESS_TOKEN_VISIBILITY_TOKEN} from "../success-modal/tokens/success-modal-visibility.token";
import {ERROR_TOKEN_VISIBILITY_TOKEN} from "../error-modal/tokens/error-modal-visibility.token";

@Directive()
export abstract class InventoryListAbstractComponent implements OnInit {
    public items$: Observable<InventoryItemModel[] | null>;
    public modalVisible$: Observable<boolean>;

    protected listItems$: BehaviorSubject<InventoryItemModel[] | null> = new BehaviorSubject<InventoryItemModel[] | null>(null);
    protected destroy$: DestroyRef = inject(DestroyRef);
    protected inventoryRequestService: InventoryRequestService = inject(InventoryRequestService);
    protected readonly errorToastVisible$: BehaviorSubject<boolean> = inject(ERROR_TOKEN_VISIBILITY_TOKEN);

    private _modalVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _currentItem$: BehaviorSubject<InventoryItemModel> = inject(CURRENT_INVENTORY_ITEM);

    constructor() {
        this.items$ = this.listItems$.asObservable();
        this.modalVisible$ = this._modalVisible$.asObservable();
    }

    public ngOnInit(): void {
        this.getNewInventory();
    }

    public abstract getNewInventory(): void;

    public setCurrentItem(item: InventoryItemModel) {
        this._currentItem$.next(item);
        this._modalVisible$.next(true);
    }

    public closeModal(): void {
        this._modalVisible$.next(false);
    }
}