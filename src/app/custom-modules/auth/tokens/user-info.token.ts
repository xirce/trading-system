import {InjectionToken} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {IAuthUserResponseModel} from "../data/models/response-models/auth-user.response-model";

export const USER_INFO_TOKEN: InjectionToken<BehaviorSubject<IAuthUserResponseModel>> = new InjectionToken<BehaviorSubject<IAuthUserResponseModel>>('токен инфы о пользователе');