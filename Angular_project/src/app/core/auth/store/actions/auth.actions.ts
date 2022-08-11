import { createAction, props } from "@ngrx/store";
import { TokenUserModel } from "../../models/tokenUserModel";

export const setTokenUserModel = createAction(
    "[Auth] Set Token User Model", // action un hangi key i kullandığı
    props<{tokenUserModel: TokenUserModel}>() //action un parametreler
)

export const removeTokenUserModel= createAction('[Auth] Remove Token User Model' );
