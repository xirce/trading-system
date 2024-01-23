import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {TradingItemModel} from "../../data/models/trading-item.model";

@Component({
    selector: 'trading-item',
    templateUrl: './trading-item.component.html',
    styleUrls: ['./styles/trading-item.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingItemComponent {
    @Input()
    public model: TradingItemModel;
}