import React from "react";
import * as Types from "../actions/types";
// const initstate={
//     user:{},
//     tokens:null,
//     isAuth:false,
//     errors:null
// }
const initstate = {
  isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
  tokens: null,
  errors: null,
  // user: JSON.parse(localStorage.getItem("user")),

};
const authReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case Types.Register:
    case Types.Login:
      localStorage.setItem("auth-token", payload.token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(payload.user));

      return {
        ...state,
        user: payload.user,
        token: payload.token,
        errors: null,
        isAuth: true,
      };
    case Types.Login_fail:
    case Types.Register_fail:
      return { ...state, errors: payload, isAuth: false };
    case Types.Logout:
      localStorage.clear()
      return{
        user:null,
        token:null,
        isAuth: false,
        errors:null,
      }
    default:
      return state;
  }
};

export default authReducer;
