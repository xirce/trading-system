import {ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Input, Output} from "@angular/core";
import {TradingItemModel} from "../../data/models/trading-item.model";
import {TradingRequestService} from "../../data/services/trading-request.service";
import {BehaviorSubject, catchError, NEVER, take} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {
    SUCCESS_TOKEN_VISIBILITY_TOKEN
} from "../../../../custom-modules/success-modal/tokens/success-modal-visibility.token";
import {ERROR_TOKEN_VISIBILITY_TOKEN} from "../../../../custom-modules/error-modal/tokens/error-modal-visibility.token";

@Component({
    selector: 'trading-item-modal',
    templateUrl: './trading-item-modal.component.html',
    styleUrls: ['./styles/trading-item-modal.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingItemModalComponent {
    @Input()
    public model: TradingItemModel;

    @Output()
    public closeModal: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public itemDeleted: EventEmitter<void> = new EventEmitter<void>();

    private readonly _successToastVisible$: BehaviorSubject<boolean> = inject(SUCCESS_TOKEN_VISIBILITY_TOKEN);
    private readonly _errorToastVisible$: BehaviorSubject<boolean> = inject(ERROR_TOKEN_VISIBILITY_TOKEN);
    private readonly _tradingRequestService: TradingRequestService = inject(TradingRequestService);
    private readonly _destroy$: DestroyRef = inject(DestroyRef);

    public deleteItem(): void {
        this._tradingRequestService.deleteItem(this.model.hashName)
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
                this._successToastVisible$.next(true);
                this.closeModal.next();
                this.itemDeleted.next();
            });
    }
}