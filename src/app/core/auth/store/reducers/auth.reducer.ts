
import { createReducer, on } from "@ngrx/store";
import { TokenUserModel } from "../../models/tokenUserModel";
import { removeTokenUserModel, setTokenUserModel } from "../actions/auth.actions";

export interface AuthState{
    tokenUserModel?:TokenUserModel;
}

const initialAuthState:AuthState = {
    tokenUserModel : undefined
}

export const authReducer = createReducer(
    initialAuthState,
    on(setTokenUserModel, (state, action) => { // o anki state degeri
      // 1. paramtere o anki state değeri, 2. parametre üzerinde çalıştığımız action
      return { ...state, tokenUserModel: action.tokenUserModel };
    }),
    on(removeTokenUserModel, state => {
      const newState: AuthState = { ...state, tokenUserModel: undefined }; 
      return newState;
    })
  );