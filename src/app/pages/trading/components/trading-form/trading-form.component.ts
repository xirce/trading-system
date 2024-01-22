import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TradingRequestService} from "../../data/services/trading-request.service";
import {catchError, NEVER, take} from "rxjs";
import {ITradingItem} from "../../interfaces/trading-item.interface";

@Component({
    selector: 'trading-form',
    templateUrl: './trading-form.component.html',
    styleUrls: ['./styles/trading-form.scss']
})
export class TradingFormComponent implements OnInit {
    public form: FormGroup = new FormGroup<any>({
        hashName: new FormControl(''),
        countToBuy: new FormControl(0),
        buyPrice: new FormControl(0),
        maxBuyPrice: new FormControl(0),
        autoSale: new FormControl(false)
    });

    private _tradingRequestService: TradingRequestService = inject(TradingRequestService);
    private _destroy$: DestroyRef = inject(DestroyRef);
    private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

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
            countToBuy: this.form.value.countToBuy,
            buySettings: {
                price: this.form.value.buyPrice,
                maxPrice: this.form.value.maxBuyPrice
            },
            autoSale: this.form.value.autoSale,
        };

        this._tradingRequestService.createTrading(data)
            .pipe(
                take(1),
                catchError(() => {

                    return NEVER;
                }),
                takeUntilDestroyed(this._destroy$)
            )
            .subscribe(() => {

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