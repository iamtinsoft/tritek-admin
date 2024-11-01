
export const DefaultLoginTime = 60000 * 60 * 24; // login for a day
export const ExtendedLoginTime = 60000 * 60 * 24 * 30; // login for 30 days
const env: string = "local";
export const TokenKey = "token";
const localServer = "http://localhost:4000/";
const liveServer = "https://serverlogend.zabstis.com/";
export const ServerUrl = env == "local" ? localServer : liveServer;
export const apiBaseUrl =
  env == "local" ? `${localServer}api` : `${liveServer}api`;
export const accentColor = "#00D77C";
export const primaryColor = "#2264B0";
export const primaryColorLight = "ghostwhite";
export const primaryColorDark = "#0A1624";
export const darkColor = "#000000";
export const lightColor = "#FEFCF2";
export const whiteColor = "#FFFFFF";
export const midColor = "#EDF5F0";
export const greenColor = "#40C138";
export const yellowColor = "#FFB200";
export const redColor = "#AA1D05";
export const hoverColor = "#FFEEC1";
export const linkColor = "#4F5564";
export const greyColor = "#F5F8FA";

export const AppName = "GIFT HEALTH CARE SERVICES";





