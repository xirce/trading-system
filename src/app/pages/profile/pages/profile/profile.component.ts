import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from "@angular/core";
import {BehaviorSubject, take} from "rxjs";
import {
    IAuthUserResponseModel
} from "../../../../custom-modules/auth/data/models/response-models/auth-user.response-model";
import {USER_INFO_TOKEN} from "../../../../custom-modules/auth/tokens/user-info.token";
import {ProfileRequestService} from "../../data/services/profile-request.service";
import {FormControl, FormGroup} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {IUserSettings} from "../../data/interfaces/user-settings.interface";

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./styles/profile.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
    public readonly userInfo$: BehaviorSubject<IAuthUserResponseModel> = inject(USER_INFO_TOKEN);
    public form: FormGroup = new FormGroup({
        steamLogin: new FormControl(''),
        steamPassword: new FormControl(''),
        sharedSecret: new FormControl(''),
        identitySecret: new FormControl('')
    });

    private _profileRequestService: ProfileRequestService = inject(ProfileRequestService);
    private _destroy$: DestroyRef = inject(DestroyRef);

    public ngOnInit(): void {
        this._profileRequestService.getUserSettings()
            .pipe(
                take(1),
                takeUntilDestroyed(this._destroy$)
            )
            .subscribe((data: IUserSettings) => {
                this.form.setValue({
                    steamLogin: data.steamLogin,
                    steamPassword: data.steamPassword,
                    sharedSecret: data.sharedSecret,
                    identitySecret: data.identitySecret
                });
            })
    }

    public saveSettings(): void {
        const userSettings: IUserSettings = {
            steamLogin: this.form.value.steamLogin,
            steamPassword: this.form.value.steamPassword,
            sharedSecret: this.form.value.sharedSecret,
            identitySecret: this.form.value.identitySecret
        };

        this._profileRequestService.saveUserSettings(userSettings)
            .pipe(
                take(1),
                takeUntilDestroyed(this._destroy$)
            )
            .subscribe();
    }
}