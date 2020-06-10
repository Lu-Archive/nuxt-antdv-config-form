import $fn from "~/utils/fn";
import httpApi from "./httpApi";

export const login = (data: any): any =>
	$fn.httpPost({
		url: httpApi.user.login,
		data
	});
export const logout = (): any =>
	$fn.httpPost({
		url: httpApi.user.logout,
	});
export const register = (data: any): any =>
	$fn.httpPost({
		url: httpApi.user.register,
		data
	});
export const getInfo = (): any =>
	$fn.httpPost({
		url: httpApi.user.getInfo
	});