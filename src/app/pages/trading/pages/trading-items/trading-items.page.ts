import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from "@angular/core";
import {TradingRequestService} from "../../data/services/trading-request.service";
import {BehaviorSubject, catchError, NEVER, Observable, take} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ERROR_TOKEN_VISIBILITY_TOKEN} from "../../../../custom-modules/error-modal/tokens/error-modal-visibility.token";
import {TradingItemModel} from "../../data/models/trading-item.model";

@Component({
    templateUrl: './trading-items.page.html',
    styleUrls: ['./styles/trading-items.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingItemsPage implements OnInit {
    public get currentItem(): TradingItemModel {
        return this._currentItem;
    }

    public listItems$: Observable<TradingItemModel[] | null>;
    public modalVisible$: Observable<boolean>;

    private _modalVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _listItems$: BehaviorSubject<TradingItemModel[] | null> = new BehaviorSubject<TradingItemModel[] | null>(null);
    private readonly _tradingRequestService: TradingRequestService = inject(TradingRequestService);
    private readonly _destroy$: DestroyRef = inject(DestroyRef);
    private readonly _errorToastVisible$: BehaviorSubject<boolean> = inject(ERROR_TOKEN_VISIBILITY_TOKEN);
    private _currentItem: TradingItemModel;

    constructor() {
        this.listItems$ = this._listItems$.asObservable();
        this.modalVisible$ = this._modalVisible$.asObservable();
    }

    public ngOnInit(): void {
        this.getNewTradingItems();
    }

    public getNewTradingItems(): void {
        this._tradingRequestService.getTradingItems()
            .pipe(
                take(1),
                catchError(() => {
                    this._errorToastVisible$.next(true);

                    return NEVER;
                }),
                takeUntilDestroyed(this._destroy$)
            )
            .subscribe((items: TradingItemModel[]) => {
                this._listItems$.next(items);
            });
    }
    public openModal(item: TradingItemModel): void {
        this._currentItem = item;
        this._modalVisible$.next(true);
    }

    public closeModal(): void {
        this._modalVisible$.next(false);
    }
}