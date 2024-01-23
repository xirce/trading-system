import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TradingRequestService} from "../../data/services/trading-request.service";
import {BehaviorSubject, catchError, NEVER, take} from "rxjs";
import {ITradingItem} from "../../interfaces/trading-item.interface";
import {
    SUCCESS_TOKEN_VISIBILITY_TOKEN
} from "../../../../custom-modules/success-modal/tokens/success-modal-visibility.token";
import {ERROR_TOKEN_VISIBILITY_TOKEN} from "../../../../custom-modules/error-modal/tokens/error-modal-visibility.token";
import {Router} from "@angular/router";

@Component({
    selector: 'trading-form',
    templateUrl: './trading-form.component.html',
    styleUrls: ['./styles/trading-form.scss']
})
export class TradingFormComponent implements OnInit {
    public form: FormGroup = new FormGroup<any>({
        hashName: new FormControl(''),
        countToBuy: new FormControl(null),
        buyPrice: new FormControl(null),
        maxBuyPrice: new FormControl(null),
        autoSale: new FormControl(false)
    });

    private readonly _successToastVisible$: BehaviorSubject<boolean> = inject(SUCCESS_TOKEN_VISIBILITY_TOKEN);
    private readonly _errorToastVisible$: BehaviorSubject<boolean> = inject(ERROR_TOKEN_VISIBILITY_TOKEN);
    private _tradingRequestService: TradingRequestService = inject(TradingRequestService);
    private _destroy$: DestroyRef = inject(DestroyRef);
    private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
    private _router: Router = inject(Router);

    public ngOnInit(): void {
        this.form.controls['autoSale'].valueChanges
            .pipe(
                takeUntilDestroyed(this._destroy$)
            )
            .subscribe((value: boolean) => {
                if (value) {
                    this.addFormControls();
                } else {
                    this.removeFormControls();
                }
            })
    }

    public createTrading(): void {
        const data: ITradingItem = {
            hashName: this.form.value.hashName,
            countToBuy: +this.form.value.countToBuy,
            buySettings: {
                price: +this.form.value.buyPrice,
                maxPrice: +this.form.value.maxBuyPrice
            },
            autoSale: this.form.value.autoSale,
        };

        if (data.autoSale) {
            data.saleSettings = {
                price: +this.form.value.salePrice,
                minPrice: +this.form.value.minSalePrice,
                reduceByAmount: +this.form.value.reduceByAmount
            }
        }

        this._tradingRequestService.createTrading(data)
            .pipe(
                take(1),
                catchError(() => {
                    this._errorToastVisible$.next(true);

                    return NEVER;
                }),
                takeUntilDestroyed(this._destroy$)
            )
            .subscribe(() => {
                this._successToastVisible$.next(true);
                this._router.navigate(['/trading/items']);
            });
    }

    public addFormControls(): void {
        this.form.addControl('salePrice', new FormControl(null));
        this.form.addControl('minSalePrice', new FormControl(null));
        this.form.addControl('reduceByAmount', new FormControl(null));
        this._cdr.detectChanges();
    }

    public removeFormControls(): void {
        this.form.removeControl('salePrice');
        this.form.removeControl('minSalePrice');
        this.form.removeControl('reduceByAmount');
    }

}