import {jwtDecode} from "jwt-decode";

import { User } from "../types/user-type";
import { TokenKey, ExtendedLoginTime, DefaultLoginTime } from "../config";
import { setWithExpiry } from "../utils/token";


const useAuth = () => {
  const AuthLogin = (jwtToken: string, keep_logged: boolean) => {
   if(keep_logged){
    setWithExpiry(TokenKey,jwtToken,ExtendedLoginTime)
   }
   else{
   setWithExpiry(TokenKey, jwtToken, DefaultLoginTime)
   }
    
  };
  const AuthLogout = () => {
    try {
      localStorage.removeItem(TokenKey);
      window.location.href = "/";
    } catch (ex) {
      return ex;
    }
  };
  const GetCurrentUser = () => {
    try {
      const jwtToken = localStorage.getItem(TokenKey);
      return jwtDecode<User>(jwtToken ? jwtToken : "");
    } catch (ex) {
      return ex;
    }
  };

  const DecodeToken = (TokenKey: string) => {
    try {
      const jwtToken = TokenKey;
      return jwtDecode<User>(jwtToken ? jwtToken : "");
    } catch (ex) {
      return ex;
    }
  };
  return { AuthLogin, AuthLogout, DecodeToken, GetCurrentUser };
};

export default useAuth;
