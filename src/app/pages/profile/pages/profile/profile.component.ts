import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {
    IAuthUserResponseModel
} from "../../../../custom-modules/auth/data/models/response-models/auth-user.response-model";
import {USER_INFO_TOKEN} from "../../../../custom-modules/auth/tokens/user-info.token";

@Component({
    templateUrl: './profile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
    public readonly userInfo$: BehaviorSubject<IAuthUserResponseModel> = inject(USER_INFO_TOKEN);

}